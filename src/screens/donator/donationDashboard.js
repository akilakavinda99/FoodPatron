import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const DonationDashboard = () => {
  return (
    <View>
      <View>
        <Text>Donation Dashboard</Text>
        <FontAwesome5 name="people-carry" size={24} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DonationDashboard;
