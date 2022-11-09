import React from "react";
import { View, StyleSheet, Text, Alert, Linking } from "react-native";
import { Button } from "react-native-paper";
import {
  acceptDonationRequest,
  rejectDonationRequest,
} from "../../api/donator.api";

const PendingReqViewCard = (props) => {
  const acceptRequest = () => {
    acceptDonationRequest(props.donationId)
      .then((res) => {
        Alert.alert("Accepted", "Request Successfully Accepted");
        props.onChangeReq(true);
      })
      .catch((err) => {
        console.log(err.response);
        Alert.alert("Error", "Error");
      });
  };

  const rejectRequest = () => {
    rejectDonationRequest(props.donationId)
      .then((res) => {
        Alert.alert("Rejected", "Request Successfully Rejected");
        props.onChangeReq(true);
      })
      .catch((err) => {
        console.log(err.response);
        Alert.alert("Error", "Error");
      });
  };

  return (
    <View
      style={{
        marginTop: 16,
        marginLeft: 16,
        marginRight: 6,
        marginBottom: 19,
        backgroundColor: "#F6F6F6",
        borderRadius: 10,
        height: 250,
      }}
    >
      <View
        style={{
          marginLeft: 20,
          marginTop: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginBottom: 23,
          }}
        >
          <Text>Requester Name : </Text>
          <Text>{props.requesterName}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 23,
          }}
        >
          <Text>Requester Email : </Text>
          <Text>{props.requesterEmail}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 23,
          }}
        >
          <Text>Requester Mobile : </Text>
          <Text>{props.requesterContact}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            // marginBottom: 23,
          }}
        >
          <Text>Description : </Text>
          <Text
            style={{
              width: 220,
              //   height: 100,
            }}
          >
            {props.requestDescription}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 30,
          }}
        >
          {props.fromAccepted ? (
            <Button
              onPress={() => {
                Linking.openURL(`tel:${props.requesterContact}`);
              }}
              mode="contained"
              color="blue"
              style={{
                marginLeft: 90,
              }}
            >
              Contact
            </Button>
          ) : (
            <>
              <Button
                onPress={acceptRequest}
                mode="contained"
                color="green"
                style={{
                  marginLeft: 30,
                }}
              >
                Accept
              </Button>
              <Button
                onPress={rejectRequest}
                mode="contained"
                color="red"
                style={{
                  marginLeft: 30,
                }}
              >
                Reject
              </Button>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PendingReqViewCard;
