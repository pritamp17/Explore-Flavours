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
LogBox.ignoreLogs(['There was problem sending log messages to your developement enviroment ']); ///😢
LogBox.ignoreLogs([' Cant perform a React state update on an unmounted component.']); ///😢
LogBox.ignoreLogs(['Warning: componentWillReceiveProps has been renamed, and is not recommended for use.']); ///😢
LogBox.ignoreLogs([' Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.%s, ']); ///😢
LogBox.ignoreLogs(['Possible Unhandled Promise Rejection']); ///😢
LogBox.ignoreLogs(['Possible Unhandled Promise Rejection']); ///😢
LogBox.ignoreLogs(['Each child in a list should have a unique']); ///😢
/// removing errors temporarily


import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import { ThemeProvider } from "styled-components/native";
import {firebaseConfig} from './src/utils/env'
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

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