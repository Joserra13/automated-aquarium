# Fish Feeder

## Overview

The automatic fish feeder enables you to schedule multiple feeding times for your fish. Simply ensure that food is placed in the storage compartment—the feeder will automatically dispense food at the designated intervals.

![Feeder](../../../docs/graphics/feeder.jpg)

## Materials Needed

### Hardware

- Raspberry Pi Pico W (with charging cable)
- 3D-printed parts
- SG90 Servo (Continuous Rotation)

    > **Note:** Most SG90 servos are limited to 180-degree rotation. If this applies to your servo, you can follow the [instructions](../../../docs/hack-servo.md) to modify it for 360-degree rotation.

- 3x Male-to-Female jumper wires

### Software

- Thonny IDE. See the [official documentation](https://thonny.org/).

## Circuit

The schematic may vary depending on your device. For the Raspberry Pi Pico W, refer to the [official pinout documentation](https://www.raspberrypi.com/documentation/microcontrollers/pico-series.html#:~:text=Raspberry%20Pi%20Pico%20W%20and%20Pico%20WH).

![Feeder-circuit](../../../docs/graphics/feeder-circuit.png)

## 3D Parts and Assembly

Several 3D-printed components are required to build the feeder. You can print these parts from the files in the [3D models](./3D%20models) folder. For the main body, the original piece designed for the Wemos board was removed. Additionally, a Raspberry Pi Pico W case was printed and attached to the main body.

![Feeder assembling](../../../docs/graphics/feeder-assembling.jpg)

> [!NOTE]  
> The original 3D files are from [CodersCafeTech](https://www.instructables.com/member/CodersCafeTech/) on [Instructables](https://www.instructables.com/Aquassist-DIY-Automatic-Fish-Feeder-With-Companion/).

## Code

The code for this project is available under the [RaspberryPi-Pico-W](../) directory.

## References

- Original concept by CodersCafeTech on [Instructables](https://www.instructables.com/Aquassist-DIY-Automatic-Fish-Feeder-With-Companion/).
- Raspberry Pi Pico cover model from [Thingiverse](https://www.thingiverse.com/thing:4793356).