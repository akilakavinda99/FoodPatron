import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { IconButton, TextInput } from "react-native-paper";

const PendingRequestss = () => {
  return (
    <View>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <IconButton
          icon="arrow-left"
          style={{
            marginLeft: 25,
            marginTop: 12,
          }}
        />
        <Text
          style={{
            marginTop: 15,
            marginLeft: 50,
            fontSize: 20,
          }}
        >
          Pending Requests
        </Text>
      </View>
      <TextInput
        theme={{ roundness: 100 }}
        mode="outlined"
        activeOutlineColor="black"
        outlineColor="#9FA5AA"
        // label="Name"
        label="Search"
        // onChangeText={(value) => setsearchTerm(value)}
        left={
          <TextInput.Icon
            icon="text-search"
            color="#ADB2B6"
            style={{
              paddingTop: 10,
              // width: 20,
              // height: 20,
            }}
          />
        }
        style={{
          width: 347,
          height: 47,
          marginLeft: 23,
          backgroundColor: "#F6F6F6",
          marginBottom: 20,
          borderRadius: 100,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default PendingRequestss;
