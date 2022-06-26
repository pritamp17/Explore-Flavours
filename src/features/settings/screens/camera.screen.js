import React, { useRef, useState, useEffect, useContext } from "react";
import { Camera, CameraType } from 'expo-camera';
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import { View } from "react-native";
import { Text } from "../../../components/typography/text.component";
import { Button } from "react-native-paper";

const ProfileCamera = styled(Camera)`
   width: 100%;
   height: 100%;
`;

const CameraContainer = styled(View)`
   width: 100%;
   height: 100%;
`;

const CameraButton = styled(Button).attrs({
   mode: "contained",
   icon: "camera"
})`
   position: absolute;
   top: 525px;
   left: 140px;
`;

export const CameraScreen = ({ navigation }) => {
   const [hasPermission, setHasPermission] = useState(false);
   const cameraRef = useRef();
   const { user } = useContext(AuthenticationContext);

   const snap = async () => {
      if (cameraRef) {
         const photo = await cameraRef.current.takePictureAsync();
         AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
         navigation.goBack();
         console.log(photo);
      }
   };

   useEffect(() => {
      (async () => {
         const { granted } = await Camera.requestCameraPermissionsAsync();
         setHasPermission(granted);
      })();
   }, []);

   if (hasPermission === false) {
      return <Text>No access to camera</Text>;
   }

   return (
      <CameraContainer>
         <ProfileCamera
            ref={camera => (cameraRef.current = camera)}
            ratio={"16:9"}
            type={CameraType.front}
            onCameraReady={() => {
               console.log("Camera Ready");
            }}
         ></ProfileCamera>

         <CameraButton onPress={snap}>Snap!</CameraButton>
      </CameraContainer>
   );
};



// type={CameraType.front}