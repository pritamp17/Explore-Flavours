import React from "react";

import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
  StyledLottieView,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
     
        <StyledLottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
        />
     
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
        
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
          title="Login"
        >
          Login 
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            title="Register"
            icon="email"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};