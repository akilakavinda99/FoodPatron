import React from "react";
import { View, StyleSheet, Text } from "react-native";

const InputName = ({ text }) => {
  return (
    <Text
      style={{
        fontWeight: "600",
        color: "#111010",
        marginTop: 20,
        paddingLeft: 30,
      }}
    >
      {text}
      <Text
        style={{
          color: "red",
        }}
      >
        *
      </Text>
    </Text>
  );
};

const styles = StyleSheet.create({});

export default InputName;
