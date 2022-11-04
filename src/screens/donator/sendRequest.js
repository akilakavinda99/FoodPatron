import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Button } from "react-native-paper";
import CreateDonationInput from "../../components/donator/CreateDonationInput";
import InputName from "../../components/donator/InputName";

const SendRequest = () => {
  const [donationTitle, setDonationTitle] = useState("");

  return (
    <View
      style={{
        marginTop: 30,
      }}
    >
      <InputName text="Your Name" />
      <CreateDonationInput
        placeholder="Your Name"
        icon="account-circle-outline"
        iconSize="20"
        iconColor="#5A5A5A"
        length={30}
        onChangeText={(value) => setDonationTitle(value)}
      />
      <InputName text="Your Email" />
      <CreateDonationInput
        placeholder="Your Email"
        icon="email-outline"
        iconSize="20"
        iconColor="#5A5A5A"
        length={30}
        onChangeText={(value) => setDonationTitle(value)}
      />
      <InputName text="Your Contact Number" />
      <CreateDonationInput
        placeholder="Your Contact Number"
        icon="phone"
        iconSize="20"
        iconColor="#5A5A5A"
        length={30}
        onChangeText={(value) => setDonationTitle(value)}
      />
      <InputName text="Describe Your Donation" />
      <TextInput
        mode="outlined"
        activeOutlineColor="black"
        outlineColor="
#9FA5AA"
        multiline={true}
        style={{
          width: 347,
          height: 123,
          marginLeft: 23,
          marginTop: 20,
          backgroundColor: "white",
        }}
      />
      <Button
        mode="contained"
        // onPress={createDonation}
        uppercase={false}
        style={{
          marginTop: 55,
          marginBottom: 50,
          width: 281,
          marginLeft: 55,
          borderRadius: 32,
          backgroundColor: "green",
        }}
      >
        Send Request
      </Button>
    </View>
  );
};

export default SendRequest;
