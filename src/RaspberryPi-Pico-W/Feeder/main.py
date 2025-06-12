# Feeder v1.1
import time
from servo import Servo
import utils
import time

# Create our Servo object, assigning the
# GPIO pin connected the PWM wire of the servo
my_servo = Servo(pin_id=28)
dateFromLastToken = time.time()-3600
dateFromLastQuery = time.time()-2

utils.connect()

 
# print("\nWrite values")
# utils.writeFirebase(idToken, 1, 10)
# print("Values written")

while True:
    
    if((time.time() - dateFromLastToken) > 3540):    
        #Need to ask for a token
        print("Ask for token")
        try:
            idToken = utils.getToken()
            print(idToken)
            dateFromLastToken = time.time()
        except:
            print(f"Error getting the token");
        
    if((time.time() - dateFromLastQuery) > 5):
        #Query the value
        try:
            print(f"\nRead values {time.time()}")
            data = utils.readFirebase(idToken)
            print(f"feednow: {data["feednow"].get("booleanValue")}")
            dateFromLastQuery = time.time()
            
            if data["feednow"].get("booleanValue"):
                
                ## TODO: Set the correct movement and timing for the food ##
#                 my_servo.write(0)    # Move the servo clockwise
#                 time.sleep_ms(1000)  # Wait for 1 second
# 
#                 my_servo.write(90)   # Set the Servo to stop
#                 time.sleep_ms(1000)  
# 
#                 my_servo.write(180)  # Move the servo counterclockwise
#                 time.sleep_ms(1000)
# 
#                 my_servo.write(90)   # Set the Servo to stop
#                 time.sleep_ms(1000)
                
                print("Update values in Firebase")
                utils.writeFirebase(idToken, False, int(data["count"].get("integerValue"))+1)
                
        except ValueError:
            print("Syntax error in JSON")
        except:
            print("Unknown error")
