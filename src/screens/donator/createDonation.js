import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Button, Checkbox, TextInput } from "react-native-paper";
import CreateDonationInput from "../../components/donator/CreateDonationInput";
import ImageUpload from "../../components/donator/ImageUpload";
import InputName from "../../components/donator/InputName";

const CreateDonation = () => {
  const [donationTitle, setDonationTitle] = useState("");
  const [checked, setChecked] = React.useState(false);
  // console.log("tjhis is title", donationTitle);
  const createDonation = () => {};
  return (
    <ScrollView
      style={{
        marginTop: 15,
      }}
    >
      <InputName text="Donation Title" />
      <CreateDonationInput
        placeholder="Donation Title"
        icon="account-switch"
        iconSize="20"
        length={30}
        onChangeText={(value) => setDonationTitle(value)}
      />
      <InputName text="Your Name" />

      <CreateDonationInput
        placeholder="Your Name"
        icon="account"
        onChangeText={(value) => setDonationTitle(value)}
      />
      <InputName text="Your Email" />

      <CreateDonationInput
        placeholder="Your Email"
        icon="email"
        type="email-address"
        onChangeText={(value) => setDonationTitle(value)}
      />
      <InputName text="Your Contact Number" />

      <CreateDonationInput
        placeholder="Your Contact Number"
        icon="phone"
        type="numeric"
        onChangeText={(value) => setDonationTitle(value)}
      />
      <InputName text="Describe Your Donation" />
      <TextInput
        mode="outlined"
        activeOutlineColor="black"
        outlineColor="#9FA5AA"
        multiline={true}
        style={{
          width: 347,
          height: 123,
          marginLeft: 23,
          backgroundColor: "white",
        }}
      />
      <InputName text="Donation Image" />

      <ImageUpload />
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          style={{
            marginLeft: 29,
            marginTop: 21,
          }}
        >
          <Checkbox
            color="green"
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 28,
            marginLeft: 10,
          }}
        >
          Do you want to share your contact info?
        </Text>
      </View>
      <Text
        style={{
          marginLeft: 51,
          marginTop: 22,
          fontWeight: "600",
        }}
      >
        If unticked only the requests you approve will
      </Text>
      <Text
        style={{
          marginLeft: 91,
          fontWeight: "600",

          // marginTop: 22,
        }}
      >
        able to view your contact details
      </Text>
      <Button
        mode="contained"
        onPress={createDonation}
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
        Create Donation
      </Button>
    </ScrollView>
  );
};

export default CreateDonation;
