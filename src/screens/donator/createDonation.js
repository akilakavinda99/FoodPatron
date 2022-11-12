import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Button, Checkbox, TextInput } from "react-native-paper";
import { createDonationRequest } from "../../api/donator.api";
import CreateDonationInput from "../../components/donator/CreateDonationInput";
import { DonationValidation } from "../../components/donator/DonationValidation";
import ImageUpload from "../../components/donator/ImageUpload";
import InputName from "../../components/donator/InputName";
import pickImage from "../../utils/imageConverter";
import ViewFundStyles from "../fund/styles/ViewFundStyles";
import createDonationStyles from "./styles/CreateDonationStyles";

const CreateDonation = () => {
  const navigation = useNavigation();
  const [donationTitle, setDonationTitle] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setNumber] = useState("");
  const [donationDescription, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // function to pick image.
  const pickImageFromGallery = () => {
    pickImage().then((res) => {
      setSelectedImage(res);
      //  console.log(res);
    });
  };

  /* Create donation function 
     create the donation object and pass to API call
  */
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

    setFormErrors(DonationValidation(donation));
    setIsSubmitting(true);
    setLoading(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      setLoading(false);

      const donation = {
        userID: "63425985a2f0b4b546de6621",
        donationTitle,
        email,
        contactNumber,
        donationDescription,
        location,
        donationImage: selectedImage,
        shareContactDetails: checked,
      };
      createDonationRequest(donation)
        .then((res) => {
          setLoading(false);
          Alert.alert("Sucess", res.data.message, [
            { text: "OK", onPress: () => navigation.goBack() },
          ]);
        })
        .catch((err) => {
          setLoading(false);

          Alert.alert("Error", err.response);
        });
      setIsSubmitting(false);
      setLoading(false);
    } else {
      setLoading(false);

      setIsSubmitting(false);
    }
  }, [formErrors, isSubmitting]);

  return (
    <ScrollView style={createDonationStyles.scrollView}>
      {loading ? (
        <ActivityIndicator
          size="large"
          style={{
            marginTop: 200,
          }}
        />
      ) : (
        <>
          <InputName text="Donation Title" />
          <CreateDonationInput
            placeholder="Donation Title"
            icon="account-switch"
            iconSize="20"
            length={30}
            onChangeText={(value) => setDonationTitle(value)}
          />
          <Text style={ViewFundStyles.errorText}>
            {formErrors.donationTitle}
          </Text>

          <InputName text="Location" />
          <CreateDonationInput
            placeholder="Location"
            icon="account"
            onChangeText={(value) => setLocation(value)}
          />
          <Text style={ViewFundStyles.errorText}>{formErrors.location}</Text>

          <InputName text="Your Email" />
          <CreateDonationInput
            placeholder="Your Email"
            icon="email"
            type="email-address"
            onChangeText={(value) => setEmail(value)}
          />
          <Text style={ViewFundStyles.errorText}>{formErrors.email}</Text>

          <InputName text="Your Contact Number" />
          <CreateDonationInput
            placeholder="Your Contact Number"
            icon="phone"
            type="numeric"
            maxLength={10}
            minLength={10}
            onChangeText={(value) => setNumber(value)}
          />
          <Text style={ViewFundStyles.errorText}>
            {formErrors.contactNumber}
          </Text>

          <InputName text="Describe Your Donation" />
          <TextInput
            mode="outlined"
            activeOutlineColor="black"
            outlineColor="#9FA5AA"
            multiline={true}
            style={createDonationStyles.descriptionInput}
            onChangeText={(value) => setDescription(value)}
          />
          <Text style={ViewFundStyles.errorText}>
            {formErrors.donationDescription}
          </Text>

          <InputName text="Donation Image" />
          <View style={createDonationStyles.imageRow}>
            <TouchableOpacity onPress={pickImageFromGallery}>
              <ImageUpload />
            </TouchableOpacity>
            {selectedImage != null && selectedImage != undefined ? (
              <Image
                style={createDonationStyles.imageStyle}
                source={{
                  uri: selectedImage,
                }}
              />
            ) : (
              <></>
            )}
          </View>
          <Text style={ViewFundStyles.errorText}>
            {formErrors.donationImage}
          </Text>

          <View style={createDonationStyles.imageRow}>
            <View style={createDonationStyles.checkBoxView}>
              <Checkbox
                color="green"
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
            </View>
            <Text style={createDonationStyles.sharetext}>
              Do you want to share your contact info?
            </Text>
          </View>

          <Text style={createDonationStyles.sharetext3}>
            If unticked only the requests you approve will
          </Text>
          <Text style={createDonationStyles.sharetext2}>
            able to view your contact details
          </Text>

          <Button
            mode="contained"
            onPress={createDonation}
            uppercase={false}
            style={createDonationStyles.createButton}
          >
            Create Donation
          </Button>
        </>
      )}
    </ScrollView>
  );
};

export default CreateDonation;
