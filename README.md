# Explore-Flavours
ReactNative



merge this branch  with main while using google cloud api..
```
IMP ***

Add cloup api key to firebase config  according to--
https://firebase.google.com/docs/functions/config-env
```


add env.js in src/utils/env.js

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
