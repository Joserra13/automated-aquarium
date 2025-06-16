import credentials
import network
import urequests
import ujson
import time
from math import log

def connect():
    #Connect to WLAN
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    wlan.connect(credentials.WIFI_SSID, credentials.WIFI_PW)
    # Wait for connect or fail
    max_wait = 10
    while max_wait > 0:
        if wlan.status() < 0 or wlan.status() >= 3:
            break
        max_wait -= 1
        print('Waiting for connection...')
        time.sleep(1)

    # Handle connection error
    if wlan.status() != 3:
        raise RuntimeError('Network connection failed')
    else:
        print('Connected')
        status = wlan.ifconfig()
        print('IP = ' + status[0])
        
def getToken():
    post_data = ujson.dumps({"email":credentials.FIREBASE_EMAIL,"password":credentials.FIREBASE_PW,"returnSecureToken": 1 })
    r = urequests.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+credentials.FIREBASE_API_KEY,headers={'content-type': 'application/json'}, data = post_data)
    idToken = ujson.loads(r.content)["idToken"]
    r.close()
    
    return idToken

def readFirebase(idToken):
    r = urequests.get(f"https://firestore.googleapis.com/v1/projects/{credentials.FIREBASE_PROJECT_ID}/databases/(default)/documents/fishFeeder?key="+credentials.FIREBASE_API_KEY,headers={'Authorization': 'Bearer ' + idToken, })
    data = ujson.loads(r.content)["documents"][0]["fields"]
    r.close()
    return data

def writeFirebase(idToken, valueFeed=None, valueCount=None, valueTemp=None):
    
    body=ujson.dumps({})
    
    if valueFeed is not None and valueCount is not None:
        body = ujson.dumps({
            "writes": [
            {
              "update": {
                "name": "projects/"+ credentials.FIREBASE_PROJECT_ID +"/databases/(default)/documents/fishFeeder/data",
                "fields": {
                  "feednow": { "booleanValue": valueFeed },
                  "count": { "integerValue": valueCount}
                }
              },
              "updateMask": {
                "fieldPaths": ["feednow", "count"]
              }
            }]
        })
    elif valueTemp is not None:
        body = ujson.dumps({
            "writes": [
            {
              "update": {
                "name": "projects/"+ credentials.FIREBASE_PROJECT_ID +"/databases/(default)/documents/fishFeeder/data",
                "fields": {
                  "waterTemperature": { "doubleValue": valueTemp }
                }
              },
              "updateMask": {
                "fieldPaths": ["waterTemperature"]
              }
            }]
        })
    
    post_data = body
    r = urequests.post(f"https://firestore.googleapis.com/v1/projects/{credentials.FIREBASE_PROJECT_ID}/databases/(default)/documents:commit?key="+credentials.FIREBASE_API_KEY,headers={'Authorization': 'Bearer ' + idToken, }, data = post_data)
    r.close()

def read_temperature(raw):
  voltage = raw / 65535.0 * 3.3
  Rt = 10 * voltage / (3.3-voltage)
  tempK = (1 / (1 / (273.15+25) + (log(Rt/10)) / 3950))
  temp_c = float(tempK - 273.15)

  return temp_c
