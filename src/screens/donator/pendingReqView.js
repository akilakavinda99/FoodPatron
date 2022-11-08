import { useNavigation } from "@react-navigation/native";
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
import pendingReqViewStyles from "./styles/PendingReqViewStyles";

const PendingReqView = ({ route }) => {
  const { title, donationId, fromAccepted } = route.params;
  const navigation = useNavigation();

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
    <View style={pendingReqViewStyles.mainView}>
      <View style={{ flexDirection: "row", marginTop: 30 }}>
        <IconButton
          icon="arrow-left"
          style={pendingReqViewStyles.backIcon}
          onPress={() => navigation.goBack()}
        />

        <Text style={pendingReqViewStyles.title}>{title}</Text>
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
        <ScrollView style={pendingReqViewStyles.scrollView}>
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
