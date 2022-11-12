import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, StyleSheet } from "react-native";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FA5Icon from "react-native-vector-icons/FontAwesome5";
import AllDonations from "../../screens/donator/allDonations";
import ViewAllFunds from "../../screens/fundsForIndividuals/viewAllFunds";
import SecondScreen from "../../screens/secondScreen";
import AllRequests from "../../screens/requester/allRequests";
import Profile from "../../screens/user/profile";

const CommonBottomNav = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarStyle: {
          height: 60,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={SecondScreen}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <MIcon
                name="home"
                color="#13B156"
                size={size}
                style={styles.iconStyles}
              />
            ) : (
              <MIcon name="home" color="#13B156" size={size} />
            ),
          tabBarLabelStyle: {
            color: "#13B156",
          },
        }}
      />
      <Tab.Screen
        name="AllDonation"
        component={AllDonations}
        options={{
          headerShown: false,
          title: "Donations",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <MIcon
                name="hand-heart-outline"
                color="#13B156"
                size={size}
                style={styles.iconStyles}
              />
            ) : (
              <MIcon name="hand-heart-outline" color="#13B156" size={size} />
            ),
          tabBarLabelStyle: {
            color: "#13B156",
          },
        }}
      />
      <Tab.Screen
        name="AllFunds"
        component={ViewAllFunds}
        options={{
          headerShown: false,
          title: "Funds",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <MIcon
                name="bank"
                color="#13B156"
                size={size}
                style={styles.iconStyles}
              />
            ) : (
              <MIcon name="bank" color="#13B156" size={size} />
            ),
          tabBarLabelStyle: {
            color: "#13B156",
          },
        }}
      />
      <Tab.Screen
        name="Requests"
        component={AllRequests}
        options={{
          headerShown: false,
          title: "Requests",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <MIcon
                name="hand-heart-outline"
                color="#13B156"
                size={size}
                style={styles.iconStyles}
              />
            ) : (
              <MIcon name="hand-heart-outline" color="#13B156" size={size} />
            ),
          tabBarLabelStyle: {
            color: "#13B156",
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <MIcon
                name="account-circle-outline"
                color="#13B156"
                size={size}
                style={styles.iconStyles}
              />
            ) : (
              <MIcon
                name="account-circle-outline"
                color="#13B156"
                size={size}
              />
            ),
          tabBarLabelStyle: {
            color: "#13B156",
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconStyles: {
    backgroundColor: "#E8F8EF",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
  },
});

export default CommonBottomNav;
