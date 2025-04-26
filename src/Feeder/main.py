# Feeder v1.0
import time
from servo import Servo

# Create our Servo object, assigning the
# GPIO pin connected the PWM wire of the servo
my_servo = Servo(pin_id=28)

while True:
    my_servo.write(0)    # Move the servo clockwise
    time.sleep_ms(1000)  # Wait for 1 second
    
    my_servo.write(90)   # Set the Servo to stop
    time.sleep_ms(1000)  
    
    my_servo.write(180)  # Move the servo counterclockwise
    time.sleep_ms(1000)

    my_servo.write(90)   # Set the Servo to stop
    time.sleep_ms(1000)  