import React from "react";
import { Image, Text } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

export default function OnboardingScreen({ navigation }) {
  return (
    <Onboarding
      onDone={() => navigation.navigate("st")}
      pages={[
        {
          backgroundColor: "#a6e4d0",
          image: (
            <Image
              style={{
                width: 100,
                height: 100,
              }}
              source={require("../../assets/icon.png")}
            />
          ),
          title: "Welcome",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../../assets/icon.png")} />,
          title: "Onboarding",
          subtitle: "Done with React Native Onboarding Swiper",
        },
      ]}
    />
  );
}
