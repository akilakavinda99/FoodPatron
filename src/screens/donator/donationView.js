import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import DonationViewImage from "../../components/donator/DonationViewImage";

export default function DonationView() {
  return (
    <View
      style={{
        backgroundColor: "#ededed",
        height: "100%",
      }}
    >
      <DonationViewImage />
      <View
        style={{
          marginTop: 88,
          marginLeft: 33,
          marginRight: 27,
          width: 330,
        }}
      >
        <Text>
          I would like to donate to 100 csdsdsdsdsdI would like to donate to 100
          csdsdsdsdsd I would like to donate to 100 csdsdsdsdsd
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "grey",
          marginLeft: 43,
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
      </View>
      <Button mode="contained">Send Request</Button>
    </View>
  );
}
