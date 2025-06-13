# Feeder v2.0
import time
from servo import Servo
import utils

# Create our Servo object, assigning the
# GPIO pin connected the PWM wire of the servo
my_servo = Servo(pin_id=28)

TIMEOUT_GET_TOKEN_s = 3540
TIMEOUT_READ_VALUES_s = 5
TIMEOUT_READ_SCHEDULE_s = 600

dateFromLastToken = time.time()-3600
dateFromLastQuery = time.time()-2
dateFromLastScheduleCheck = time.time()-600

#Variable to store the scheduledates
schedule = [0,0,0]
scheduleEnabled = [False, False, False]

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
    # my_servo.write(0)    # Move the servo clockwise
    time.sleep_ms(1000)  # Wait for 1 second

    # my_servo.write(90)   # Set the Servo to stop
    # time.sleep_ms(1000)  

    # my_servo.write(180)  # Move the servo counterclockwise
    # time.sleep_ms(1000)

    # my_servo.write(90)   # Set the Servo to stop
    # time.sleep_ms(1000)

while True:

    current_time = time.localtime()
    current_seconds = current_time[3] * 3600 + current_time[4] * 60 + current_time[5]

    if((current_seconds == schedule[0] and scheduleEnabled[0]) or (current_seconds == schedule[1] and scheduleEnabled[1]) or (current_seconds == schedule[2] and scheduleEnabled[2])):
        #Move the servo to feed
        feedTheFish()
    
    if((time.time() - dateFromLastToken) > TIMEOUT_GET_TOKEN_s):    
        #Need to ask for a token
        print("Ask for token")
        try:
            idToken = utils.getToken()
            print(idToken)
            dateFromLastToken = time.time()
        except:
            print(f"Error getting the token");
        
    if((time.time() - dateFromLastQuery) > TIMEOUT_READ_VALUES_s):
        #Query the value
        try:
            print(f"\nRead values")
            data = utils.readFirebase(idToken)
            print(f"feednow: {data["feednow"].get("booleanValue")}")
            dateFromLastQuery = time.time()
            
            if data["feednow"].get("booleanValue"):
                
                feedTheFish()
                
                print("Update values in Firebase")
                utils.writeFirebase(idToken, False, int(data["count"].get("integerValue"))+1)
                
        except ValueError:
            print("Syntax error in JSON")
        except:
            print("Unknown error")
            
    if((time.time() - dateFromLastScheduleCheck) > TIMEOUT_READ_SCHEDULE_s):
        #Read if schedules are enabled
        try:
            print(f"\nRead Schedule values")
            data = utils.readFirebase(idToken)
            
            for x in range(3):
                varName = "schedule" + str(x)
                if data[varName + "Enabled"].get("booleanValue"):
                    scheduleEnabled[x] = True
                    schedule[x] = time_string_to_seconds(data[varName].get("stringValue"))                  
                else:
                    scheduleEnabled[x] = False
                    schedule[x] = ""
                
                print("scheduleEnabled[x], schedule[x]:")
                print(scheduleEnabled[x])
                print(schedule[x])
            
            dateFromLastScheduleCheck = time.time()
        except ValueError:
            print("Syntax error in JSON")
        except:
            print("Unknown error in Schedule")
            
