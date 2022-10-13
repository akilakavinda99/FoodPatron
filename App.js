import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FirstScreen from "./src/screens/firstScreen";
import OnboardingScreen from "./src/screens/onboardingScreen";
import SecondScreen from "./src/screens/secondScreen";
import HomeScreen from "./src/screens/homeScreen";

export default function App() {
  //to show the onboarding screens only at the initial launch
  const [firstLaunch, setFirstLaunch] = React.useState(null);
  React.useEffect(() => {
    async function setData() {
      const appData = await AsyncStorage.getItem("appLaunched");
      if (appData == null) {
        setFirstLaunch(true);
        AsyncStorage.setItem("appLaunched", "false");
      } else {
        setFirstLaunch(false);
      }
    }
    setData();
  }, []);
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {firstLaunch ? (
          <Stack.Screen name="first" component={OnboardingScreen} />
        ) : (
          <Stack.Screen name="second" component={SecondScreen} />
        )}
        <Stack.Screen name="st" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
