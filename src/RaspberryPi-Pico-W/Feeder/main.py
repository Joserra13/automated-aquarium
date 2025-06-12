# Feeder v1.1
import time
from servo import Servo
import utils

# Create our Servo object, assigning the
# GPIO pin connected the PWM wire of the servo
my_servo = Servo(pin_id=28)

utils.connect()

print("Ask for token")
idToken = utils.getToken()
print(idToken)

data = utils.readFirebase(idToken)
print("count ")
print(data["count"].get("integerValue"))

print("Write values")
utils.writeFirebase(idToken, 1, 10)
print("Values written")

while True:
    my_servo.write(0)    # Move the servo clockwise
    time.sleep_ms(1000)  # Wait for 1 second
    
    my_servo.write(90)   # Set the Servo to stop
    time.sleep_ms(1000)  
    
    my_servo.write(180)  # Move the servo counterclockwise
    time.sleep_ms(1000)

    my_servo.write(90)   # Set the Servo to stop
    time.sleep_ms(1000)
    print("Rotating...")

