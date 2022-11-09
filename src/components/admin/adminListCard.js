import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Chip } from "react-native-paper";
import styles from "./styles/DonatorCardStyles";

export default function AdminListCard({
  imageUrl,
  title,
  description,
  requests,
  location,
  donationId,
}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.mainView}
      onPress={() =>
        navigation.navigate("donationView", { donationId: donationId })
      }
    >
      <View style={styles.mainRow}>
        {/* <Image
          style={styles.image}
          resizeMode="cover"
          source={{
            uri: imageUrl,
          }}
        /> */}
        <View style={styles.mainColumn}>
          <Text style={styles.heading}>{title}</Text>
          <Text
            ellipsizeMode="tail"
            numberOfLines={2}
            style={styles.description}
          >
            {description}
          </Text>
          <View style={styles.iconRow}>
            <Button
              icon="map-marker"
              uppercase={false}
              labelStyle={{
                fontSize: 12.5,

                color: "green",
              }}
            >
              <Text style={{ color: "black" }}>{location}</Text>
            </Button>
            <Button
              icon="account-multiple"
              labelStyle={{
                fontSize: 12.5,
                color: "blue",
              }}
            >
              <Text
                style={{
                  color: "black",
                }}
              >
                {requests}
              </Text>
            </Button>
          </View>
        </View>
      </View>
      <View style={styles.mainRow}></View>
    </TouchableOpacity>
  );
}
