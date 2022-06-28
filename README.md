# Explore-Flavours
ReactNative



merge this branch  with main while using google cloud api..
#enable this api's on your  google cloud account
```
geocoding - https://developers.google.com/maps/documentation/geocoding/overview
Places API - https://developers.google.com/maps/documentation/places/web-service?hl=en 
```
```
IMP ***
Add cloup api key to firebase config  according to--
cd/functions
1.  firebase functions:config:set google.key="API key"
2.  now check if value is updated or not "firebase functions:config:get"
3. now run
  "firebase functions:config:get > .runtimeconfig.json"
 4. firebase functions:config:get > .runtimeconfig.json
    this will create .runtimeconfig file in /functions , Now add this file in git ignoe
  
```


add env.js in src/utils/env.js    ** imp

```
import { Platform } from "react-native";
const liveHost = "firebase deployed function url";
const localHost = "http://192.168.167.118:5001/mealstogo-12f18/us-central1";

export const isDevelopment = process.env.NODE_ENV === "development";



export const isAndroid = Platform.OS === "android";
export const isMock = false;  ///(for googlecloud api) during devlopement make this true
export const host = !isDevelopment || isAndroid ? liveHost : localHost;

// export const host = isDevelopment ? localHost : liveHost;
// export const host = liveHost; 

export const firebaseConfig = {                  ///// firebase project config
    apiKey: "",                           
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

```
