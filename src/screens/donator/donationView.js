import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Text, View, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import { getOneDonation } from "../../api/donator.api";
import DonationViewImage from "../../components/donator/DonationViewImage";
import donationViewStyles from "./styles/DonationViewStyles";

export default function DonationView({ route }) {
  const navigation = useNavigation();
  const { donationId } = route.params;

  const [loading, setLoading] = useState(true);
  const [donation, setDonation] = useState({});

  // Get donation details
  useEffect(() => {
    setLoading(true);

    async function getDonation(donationId) {
      await getOneDonation(donationId)
        .then((res) => {
          setLoading(false);
          setDonation(res.data.donation);
          console.log(res.data.donation);
        })
        .catch((err) => {
          setLoading(false);
          Alert.alert("Error Occured");
          console.log(err);
        });
    }

    getDonation(donationId);
  }, []);

  const navigateToSendRequest = () => {
    navigation.navigate("donationDashboard", { donationID: donation._id });
  };

  return (
    <View style={donationViewStyles.mainView}>
      {loading ? (
        <ActivityIndicator
          size="large"
          style={donationViewStyles.activityIndicator}
        />
      ) : (
        <>
          <DonationViewImage
            image={donation.donationImage}
            title={donation.donationTitle}
            location={donation.location}
            requests={donation.numberOfRequests}
          />
          <View style={donationViewStyles.descriptionView}>
            <View style={donationViewStyles.descriptionView2}>
              <Text>{donation.donationDescription}</Text>
            </View>
            <View style={donationViewStyles.contactView}>
              <Text style={{ textAlign: "center", fontSize: 16 }}>
                Contact Details
              </Text>
              {donation.shareContactDetails ? (
                <View style={donationViewStyles.contactRow}>
                  <View style={donationViewStyles.iconView}>
                    <Ionicons
                      onPress={() => {
                        Linking.openURL(`mailto:${donation.email}`);
                      }}
                      name="mail-outline"
                      size={24}
                      color="white"
                      style={donationViewStyles.mailIcon}
                    />
                  </View>
                  <View style={donationViewStyles.callIconView}>
                    <Ionicons
                      onPress={() => {
                        Linking.openURL(`tel:${donation.contactNumber}`);
                      }}
                      name="call-outline"
                      size={24}
                      color="white"
                      style={donationViewStyles.callIcon}
                    />
                  </View>
                </View>
              ) : (
                <View style={donationViewStyles.textView}>
                  <Text style={donationViewStyles.textStyle1}>
                    The contact details will be available once
                  </Text>
                  <Text style={donationViewStyles.textStyle1}>
                    your request is approved
                  </Text>
                </View>
              )}
            </View>
            <Button
              mode="contained"
              style={donationViewStyles.sendReq}
              onPress={navigateToSendRequest}
            >
              Send Request
            </Button>
          </View>
        </>
      )}
    </View>
  );
}
