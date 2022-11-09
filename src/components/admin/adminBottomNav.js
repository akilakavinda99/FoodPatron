import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, StyleSheet } from "react-native";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import AllDonations from "../../screens/donator/allDonations";
import SecondScreen from "../../screens/secondScreen";

const AdminBottomNav = () => {
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

export default AdminBottomNav;
