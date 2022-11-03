import React from "react";
import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ImageUpload = () => {
  return (
    <View
      style={{
        width: 110,
        height: 98,
        backgroundColor: "#F4F6F9",
        borderStyle: "dashed",
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: 29,
        marginTop: 14,
      }}
    >
      <AntDesign
        name="pluscircleo"
        size={24}
        color="black"
        style={{
          marginLeft: 45,
          marginTop: 35,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageUpload;
