import React from "react";
import { Button, Text, View } from "react-native";

export default function FirstScreen({ navigation }) {
  return (
    <View>
      <Text>First Page</Text>
      <Button
        title="Go to second"
        onPress={() => navigation.navigate("second")}
      />
    </View>
  );
}
