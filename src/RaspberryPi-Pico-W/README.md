# Raspberry Pi Pico W

> [!WARNING]  
> To obtain the Firebase keys required for your `credentials.py` file, refer to the [Firebase setup guide](../../../docs/firebase.md). In addition to the Firebase keys, you must also provide your WiFi SSID and password in this file.

## Code

First, connect the Raspberry Pi Pico W to your IDE by following the [official setup guide](https://projects.raspberrypi.org/en/projects/getting-started-with-the-pico/3).

To run the code, you will need the **Servo** object from the **micropython-servo** library:

![Add package](../../docs/graphics/micropython-servo-lib.png)

Once the package is installed, copy the [main.py](./main.py), [credentials.py.example](./credentials.py.example) (rename to `credentials.py`), and [utils.py](./utils.py) files to your Raspberry Pi Pico, and run `main.py` in Thonny IDE.
