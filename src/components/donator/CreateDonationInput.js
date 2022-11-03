import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

const CreateDonationInput = ({
  placeholder,
  icon,
  iconSize,
  length,
  type,
  ...rest
}) => {
  return (
    <TextInput
      mode="outlined"
      activeOutlineColor="black"
      outlineColor="#9FA5AA"
      maxLength={length}
      keyboardType={type}
      // label="Name"
      // label="Name"
      placeholder={placeholder}
      left={
        <TextInput.Icon
          icon={icon}
          color="black"
          style={{
            paddingTop: 10,
          }}
        />
      }
      style={{
        width: 347,
        height: 47,
        marginLeft: 23,
        backgroundColor: "white",
      }}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({});

export default CreateDonationInput;
