import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Button, Checkbox, TextInput } from "react-native-paper";
import { createDonationRequest } from "../../api/donator.api";
import CreateDonationInput from "../../components/donator/CreateDonationInput";
import ImageUpload from "../../components/donator/ImageUpload";
import InputName from "../../components/donator/InputName";
import pickImage from "../../utils/imageConverter";

const EditDonation = ({ route }) => {
  const { donation } = route.params;
  console.log("this is donation", donation);
  const navigation = useNavigation();
  const [donationTitle, setDonationTitle] = useState(donation.donationTitle);
  const [location, setLocation] = useState(donation.location);
  const [email, setEmail] = useState(donation.email);
  const [contactNumber, setNumber] = useState(
    donation.contactNumber.toString()
  );
  const [donationDescription, setDescription] = useState(
    donation.donationDescription
  );
  const [selectedImage, setSelectedImage] = useState(donation.donationImage);
  const [checked, setChecked] = useState(donation.shareContactDetails);
  console.log("thisis number ", contactNumber);
  const pickImageFromGallery = () => {
    pickImage().then((res) => {
      setSelectedImage(res);
      //  console.log(res);
    });
  };
  const createDonation = async () => {
    const donation = {
      userID: 12133,
      donationTitle,
      email,
      contactNumber,
      donationDescription,
      location,
      donationImage: selectedImage,
      shareContactDetails: checked,
    };

    await createDonationRequest(donation)
      .then((res) => {
        Alert.alert("Sucess", res.data.message, [
          { text: "OK", onPress: () => navigation.goBack() },
        ]);
        // console.log("this is from create ", res.data.message);
      })
      .catch((err) => {
        Alert.alert("Error", err.response);
      });
    // console.log("this is reult", res);
  };
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
        value={donationTitle}
      />
      <InputName text="Your Name" />

      <CreateDonationInput
        placeholder="Location"
        icon="account"
        onChangeText={(value) => setLocation(value)}
        value={location}
      />
      <InputName text="Your Email" />

      <CreateDonationInput
        placeholder="Your Email"
        icon="email"
        type="email-address"
        onChangeText={(value) => setEmail(value)}
        value={email}
      />
      <InputName text="Your Contact Number" />

      <CreateDonationInput
        placeholder="Your Contact Number"
        icon="phone"
        type="numeric"
        // maxLength={10}
        // minLength={10}
        onChangeText={(value) => setNumber(value)}
        value={contactNumber}
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
        onChangeText={(value) => setDescription(value)}
        value={donationDescription}
      />
      <InputName text="Donation Image" />
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={pickImageFromGallery}>
          <ImageUpload />
        </TouchableOpacity>
        {selectedImage != null && selectedImage != undefined ? (
          <Image
            style={{
              width: 110,
              height: 98,
              marginLeft: 35,
              marginTop: 13,
            }}
            source={{
              uri: selectedImage,
            }}
          />
        ) : (
          <></>
        )}
      </View>
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

export default EditDonation;
