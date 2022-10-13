import React from "react";
import { Button, Text, View } from "react-native";

export default function SecondScreen({ navigation }) {
  return (
    <View>
      <Text>Home page</Text>
      <Button title="Go back" onPress={() => navigation.navigate("st")} />
    </View>
  );
}
