import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FirstScreen from "./src/screens/firstScreen";

import SecondScreen from "./src/screens/secondScreen";
import HomeScreen from "./src/screens/homeScreen";

import DonationView from "./src/screens/donator/donationView";
import AllDonations from "./src/screens/donator/allDonations";
import CreateDonation from "./src/screens/donator/createDonation";
import SendRequest from "./src/screens/donator/sendRequest";
import OnboardingScreen from "./src/screens/onboardingScreen";
import DonationDashboard from "./src/screens/donator/donationDashboard";
import MyDonations from "./src/screens/donator/myDonations";
import PendingRequests from "./src/screens/donator/pendingRequests";
import ApprovedRequests from "./src/screens/donator/approvedRequests";
import OrgRegStepOne from "./src/screens/organization/registration/stepOne";
import OrgRegStepTwo from "./src/screens/organization/registration/stepTwo";

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
          <Stack.Screen
            name="second"
            component={SecondScreen}
            options={{ headerShown: false }}
          />
        )}
        <Stack.Screen name="st" component={HomeScreen} />
        <Stack.Screen
          name="donationView"
          component={DonationView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="allDonations"
          component={AllDonations}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="createDonation"
          component={CreateDonation}
          options={{ title: "Lets create a donation" }}
        />
        <Stack.Screen
          name="sendRequest"
          component={SendRequest}
          options={{ title: "Lets send a request" }}
        />
        <Stack.Screen
          name="donationDashboard"
          component={DonationDashboard}
          options={{ title: "Donation Dashboard" }}
        />
        <Stack.Screen
          name="myDonations"
          component={MyDonations}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="pendingRequests"
          component={PendingRequests}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="acceptedRequests"
          component={ApprovedRequests}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OrgRegStepOne"
          component={OrgRegStepOne}
          options={{ title: "New Organization" }}
        />
        <Stack.Screen
          name="OrgRegStepTwo"
          component={OrgRegStepTwo}
          options={{ title: "New Organization" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
