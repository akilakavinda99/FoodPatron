import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { IconButton, TextInput } from "react-native-paper";
import { getUserDonation } from "../../api/donator.api";
import PendingReqCard from "../../components/donator/pendingReqCard";

const AcceptedRequests = ({ route }) => {
  const userId = "63425985a2f0b4b546de6621";
  const [loading, setLoading] = useState(false);
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    setLoading(true);
    getUserDonation(userId)
      .then((res) => {
        console.log(res.data);
        setDonations(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);

        Alert.alert("An Error Occoured");
        console.log(err.response);
      });
  }, []);
  return (
    <ScrollView>
      <>
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
            Accepted Requests
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
        <ScrollView>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <ScrollView>
              {donations.map((donation) => {
                return (
                  <PendingReqCard
                    key={donation._id}
                    imageUrl={donation.donationImage}
                    title={donation.donationTitle}
                    description={donation.donationDescription}
                    donationId={donation._id}
                    fromAccepted={true}
                  />
                );
              })}
            </ScrollView>
          )}
        </ScrollView>
      </>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default AcceptedRequests;
