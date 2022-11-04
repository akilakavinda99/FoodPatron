import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Button } from "react-native-paper";
import { sendDonationRequest } from "../../api/donator.api";

import CreateDonationInput from "../../components/donator/CreateDonationInput";
import InputName from "../../components/donator/InputName";

const SendRequest = ({ route }) => {
  const { donationID } = route.params;
  const navigation = useNavigation();
  // console.log("this is id ", donationId);
  const [requesterName, setName] = useState("");
  const [requesterEmail, setEmail] = useState("");
  const [requesterContact, setNumber] = useState("");
  const [requestDescription, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const sendRequest = async () => {
    setLoading(true);
    const request = {
      donationID,
      requesterName,
      requestDescription,
      requesterEmail,
      requesterContact,
    };
    console.log(request);
    try {
      await sendDonationRequest(request)
        .then((res) => {
          setLoading(false);
          Alert.alert("Success", "Request Successfully Sent");
          navigation.goBack();
        })
        .catch((err) => {
          setLoading(false);
          alert("Error", "Error Occured");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loading ? (
        <View
          style={{
            marginTop: 50,
          }}
        >
          <ActivityIndicator
            size="large"
            style={{
              marginTop: 300,
            }}
          />
        </View>
      ) : (
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
            onChangeText={(value) => setName(value)}
          />
          <InputName text="Your Email" />
          <CreateDonationInput
            placeholder="Your Email"
            icon="email-outline"
            iconSize="20"
            iconColor="#5A5A5A"
            length={30}
            onChangeText={(value) => setEmail(value)}
          />
          <InputName text="Your Contact Number" />
          <CreateDonationInput
            placeholder="Your Contact Number"
            icon="phone"
            iconSize="20"
            iconColor="#5A5A5A"
            length={30}
            onChangeText={(value) => setNumber(value)}
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
              marginTop: 20,
              backgroundColor: "white",
            }}
            onChangeText={(value) => setDescription(value)}
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
            onPress={sendRequest}
          >
            Send Request
          </Button>
        </View>
      )}
    </>
  );
};

export default SendRequest;
