import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { IconButton, TextInput } from "react-native-paper";
import { getAcceptedRequests, getPendingRequests } from "../../api/donator.api";
import PendingReqCard from "../../components/donator/pendingReqCard";
import PendingReqViewCard from "../../components/donator/pendingReqViewCard";

const PendingReqView = ({ route }) => {
  const { title, donationId, fromAccepted } = route.params;
  const [loading, setLoading] = useState(false);
  const [donations, setDonations] = useState([]);
  console.log(donationId);
  useEffect(() => {
    setLoading(true);
    if (fromAccepted) {
      getAcceptedRequests(donationId)
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
    } else {
      getPendingRequests(donationId)
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
    }
  }, []);
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <View style={{ flexDirection: "row", marginTop: 30 }}>
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
            marginLeft: 10,
            fontSize: 20,
          }}
        >
          {title}
        </Text>
      </View>

      {loading ? (
        <>
          <ActivityIndicator />
        </>
      ) : donations.length == 0 ? (
        <>
          <Text>NO Items</Text>
        </>
      ) : (
        <ScrollView
          style={{
            marginTop: 20,
            marginLeft: 15,
            marginRight: 22,
          }}
        >
          {donations.map((donation) => {
            return (
              <PendingReqViewCard
                requesterName={donation.requesterName}
                requestDescription={donation.requestDescription}
                requesterContact={donation.requesterContact}
                requesterEmail={donation.requesterEmail}
                fromAccepted={fromAccepted}
              />
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default PendingReqView;
