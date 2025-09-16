# Feeder v3.0
import time
from servo import Servo
import utils
from picozero import pico_led
from machine import ADC

pico_led.on()

# Create our Servo object, assigning the
# GPIO pin connected the PWM wire of the servo
my_servo = Servo(pin_id=28)

# Thermistor constants
Thermistor_PIN = 27           # GP27 = ADC1
thermistor = ADC(Thermistor_PIN)

# WaterLevel constants
WaterLevel_PIN = 26           # GP26 = ADC0
water_level = ADC(WaterLevel_PIN)

TIMEOUTS = {
    "token": 3540,
    "values": 5,
    "schedule": 600
}

last_actions = {
    "token": time.time() - 3600,
    "values": time.time() - 2,
    "schedule": time.time() - 600
}

#Variable to store the scheduledates
schedules = [
    {"time": 0, "enabled": False},
    {"time": 0, "enabled": False},
    {"time": 0, "enabled": False}
]

utils.connect()

def time_string_to_seconds(time_str):
    # Split the string by colon
    hours, minutes = time_str.split(":")
    
    # Convert to integers
    hours = int(hours)
    minutes = int(minutes)
    
    # Calculate seconds since midnight
    seconds_since_midnight = hours * 3600 + minutes * 60
    
    return seconds_since_midnight

def feedTheFish():
    print("\nFeeding time!")
    ## TODO: Set the correct movement and timing for the food ##
    my_servo.write(0)    # Move the servo clockwise
    time.sleep_ms(750)  # Wait for 1 second
    
    my_servo.write(90)    # Stop the servo
    time.sleep_ms(1000)  # Wait for 1 second

while True:

    current_time = time.localtime()
    current_seconds = current_time[3] * 3600 + current_time[4] * 60 + current_time[5]

    if any(s["enabled"] and current_seconds == s["time"] for s in schedules):
        #Move the servo to feed
        feedTheFish()
    
    if (time.time() - last_actions["token"]) > TIMEOUTS["token"]:    
        #Need to ask for a token
        print("Ask for token")
        try:
            idToken = utils.getToken()
            print(idToken)
            last_actions["token"] = time.time()
        except Exception as e:
            print(f"Error getting the token: {e}")
        
    if(time.time() - last_actions["values"]) > TIMEOUTS["values"]:
        
        rawTemp = thermistor.read_u16()  # 16-bit ADC (0-65535)
        rawWaterLevel = water_level.read_u16()
        
        temp_c = utils.read_temperature(rawTemp)
        waterLevel = utils.read_waterLevel(rawWaterLevel)
        
        #Query the value
        try:
            print(f"\nRead values")
            data = utils.readFirebase(idToken)
            print(f"feednow: {data["feednow"].get("booleanValue")}")
            last_actions["values"] = time.time()
            
            if data["feednow"].get("booleanValue"):
                
                feedTheFish()
                
                print("Update values in Firebase")
                utils.writeFirebase(idToken, valueFeed=False, valueCount=int(data["count"].get("integerValue"))+1)
            
            print(f"Update temp")
            utils.writeFirebase(idToken, valueTemp=temp_c, valueWaterLevel=waterLevel)                
                
        except ValueError:
            print("Syntax error in JSON")
        except:
            print("Unknown error")
            
    if (time.time() - last_actions["schedule"]) > TIMEOUTS["schedule"]:
        #Read if schedules are enabled
        try:
            print(f"\nRead Schedule values")
            data = utils.readFirebase(idToken)
            
            for x in range(3):
                varName = f"schedule{x}"
                schedule_enabled = data[f"{varName}Enabled"].get("booleanValue")
                schedules[x]["enabled"] = schedule_enabled
                
                if schedule_enabled:
                    schedules[x]["time"] = time_string_to_seconds(data[varName].get("stringValue"))
                
                print(f"Schedule {x}: {schedules[x]}")
            
            last_actions["schedule"] = time.time()
        except Exception as e:
            print(f"Error reading schedule: {e}")

