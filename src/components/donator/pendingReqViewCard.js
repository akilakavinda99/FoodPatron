import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";

const PendingReqViewCard = (props) => {
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
                mode="contained"
                color="green"
                style={{
                  marginLeft: 30,
                }}
              >
                Accept
              </Button>
              <Button
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
