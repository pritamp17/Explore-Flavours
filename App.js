// import "../ignoreWarnings";
import {LogBox} from "react-native";
LogBox.ignoreLogs([
"exported from 'deprecated-react-native-prop-types'.",
])   //// just to remove react-native-prop-types warning 😢
LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core and will be removed in a future release.']); ///😢
LogBox.ignoreLogs(['Expected style "top: 50" to contain units']); ///😢
LogBox.ignoreLogs(['Stack Navigator']); ///😢
LogBox.ignoreLogs(['Found screens with the same name nested inside one another.']); ///😢
LogBox.ignoreLogs(['requestPermissionsAsync()" is now deprecated']); ///😢
LogBox.ignoreLogs(['[Unhandled promise rejection: ReferenceError:  find variable: navigation]']); ///😢

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyD9bIPwQSQbRbhGz2Q8DLLnw88ikCQt4eQ",
  authDomain: "mealstogo-12f18.firebaseapp.com",
  projectId: "mealstogo-12f18",
  storageBucket: "mealstogo-12f18.appspot.com",
  messagingSenderId: "231030640458",
  appId: "1:231030640458:web:c7ae69d6c51aa97eef7bb3"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}



export default function App() {

  //     signInWithEmailAndPassword(auth, "stealth54@gmail.com", "12345678p")
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
      <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}