import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { Linking } from "react-native";
import { Button } from "react-native-paper";
import { getOneDonation } from "../../api/donator.api";
import DonationViewImage from "../../components/donator/DonationViewImage";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function DonationView({ route }) {
  const { donationId } = route.params;
  const [loading, setLoading] = useState(true);
  const [donation, setDonation] = useState({});
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

          console.log(err);
        });
    }
    getDonation(donationId);
  }, []);
  return (
    <View
      style={{
        backgroundColor: "#ededed",
        height: "100%",
      }}
    >
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
        <>
          <DonationViewImage
            image={donation.donationImage}
            title={donation.donationTitle}
            location={donation.location}
            requests={donation.numberOfRequests}
          />
          <View
            style={{
              marginLeft: 15,
            }}
          >
            <View
              style={{
                marginTop: 88,
                marginLeft: 33,
                marginRight: 27,
                width: 300,
                marginBottom: 30,
              }}
            >
              <Text>{donation.donationDescription}</Text>
            </View>
            <View
              style={{
                backgroundColor: "grey",
                marginLeft: 35,
                marginRight: 27,
                borderRadius: 10,
                width: 287,
                height: 120,
                marginTop: 20,
              }}
            >
              <Text style={{ textAlign: "center", fontSize: 16 }}>
                Contact Details
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 26,
                }}
              >
                <View
                  style={{
                    height: 50,
                    width: 50,
                    backgroundColor: "#415171",
                    borderRadius: 50,
                    marginLeft: 43,
                  }}
                >
                  <Ionicons
                    onPress={() => {
                      Linking.openURL(`mailto:${donation.email}`);
                    }}
                    name="mail-outline"
                    size={24}
                    color="white"
                    style={{
                      marginTop: 13,
                      marginLeft: 13,
                    }}
                  />
                </View>
                <View
                  style={{
                    height: 50,
                    width: 50,
                    backgroundColor: "#415171",
                    borderRadius: 50,
                    marginLeft: 97,
                  }}
                >
                  <Ionicons
                    onPress={() => {
                      Linking.openURL(`tel:${donation.contactNumber}`);
                    }}
                    name="call-outline"
                    size={24}
                    color="white"
                    style={{
                      marginTop: 12,
                      marginLeft: 15,
                    }}
                  />
                </View>
              </View>
            </View>
            <Button
              mode="contained"
              style={{
                marginTop: 67,
                width: 281,
                marginLeft: 35,
                borderRadius: 32,
                backgroundColor: "green",
              }}
            >
              Send Request
            </Button>
          </View>
        </>
      )}
    </View>
  );
}
