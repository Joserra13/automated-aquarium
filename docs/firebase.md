# Setting Up the Firebase Project

## Table of Contents

- [Obtain Credentials](#obtain-credentials)
- [Create the Database](#create-the-database)
- [Accessing the Database](#accessing-the-database)

## Obtain Credentials

1. Navigate to the [Firebase Console](https://console.firebase.google.com/u/3/) and create a new project, following the default configuration steps.

   ![Get started with Firebase](./graphics/Firebase1.png)

2. Go to the **Authentication** tab and enable both the Email/Password and Google sign-in methods:

   ![Authorization](./graphics/Firebase2.png)

3. In **Project Settings**, you will find the information required to populate the variables in the [credentials.py](../src/RaspberryPi-Pico-W/Feeder/credentials.py.example) file:

   ```
   FIREBASE_EMAIL       => The email address used to create the Firebase project.
   FIREBASE_PW          => The password for the email address used.
   FIREBASE_API_KEY     => The Web API key shown in the project settings.
   FIREBASE_PROJECT_ID  => The Project ID shown in the project settings.
   ```

   ![Project Settings](../docs/graphics/Firebase3.png)

## Create the Database

1. Navigate to **Product categories** → Build → Firestore Database and select **Create database**. The default settings are sufficient.

   ![Create database](../docs/graphics/Firebase4.png)

2. Create a collection to store your data. For example:

   ![Create collection](../docs/graphics/Firebase5.png)

3. To allow external queries, update the database rules as shown:

   ![Set access rules](../docs/graphics/Firebase6.png)

## Accessing the Database

Since the Raspberry Pi Pico will be querying the database, it requires an authentication token. This token is obtained by signing in with your credentials.

### Sign Up with Email/Password

Refer to the [Firebase documentation](https://firebase.google.com/docs/reference/rest/auth?authuser=2#section-create-email-password) for details. This step is only required once.

![SignUp](./graphics/Firebase7.png)

### Sign In with Email/Password

To obtain a token whenever it expires, sign in again as described in the [documentation](https://firebase.google.com/docs/reference/rest/auth?authuser=2#section-sign-in-email-password). The request and response formats are the same as for sign-up.

### Reading Data from the Database

To read data, make a GET request to the Firestore database. Include the **idToken** obtained earlier as a Bearer Token in the Authorization header. See the [official documentation](https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents/get?authuser=2) for more information.

![Read values](./graphics/Firebase8.png)

Example request body:

```json
{
    "documents": [
        {
            "name": "projects/my-aquarium-test/databases/(default)/documents/fishFeeder/data",
            "fields": {
                "feednow": {
                    "booleanValue": false
                },
                "count": {
                    "integerValue": "13"
                }
            },
            "createTime": "2025-06-12T15:51:06.841043Z",
            "updateTime": "2025-06-12T15:54:03.688480Z"
        }
    ]
}
```

### Writing Data to the Database

To write data, send a POST request to the Firestore endpoint. Ensure the **idToken** is included in the Authorization header as a Bearer Token. Refer to the [official documentation](https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents/commit?authuser=2) for details on the request format and required fields.

![Write values](../docs/graphics/Firebase9.png)

Example request body:

```json
{
  "writes": [
    {
      "update": {
        "name": "projects/my-aquarium-test/databases/(default)/documents/fishFeeder/data",
        "fields": {
          "feednow": { "booleanValue": false },
          "count": { "integerValue": 7 }
        }
      },
      "updateMask": {
        "fieldPaths": ["feednow", "count"]
      }
    }
  ]
}
```