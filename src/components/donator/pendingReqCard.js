import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { Chip } from "react-native-paper";
import styles from "./styles/DonatorCardStyles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const PendingReqCard = ({
  imageUrl,
  title,
  description,
  requests,
  location,
  donationId,
  fromAccepted,
}) => {
  const navigation = useNavigation();

  const navigateToReqView = () => {
    if (fromAccepted) {
      navigation.navigate("pendingReqView", {
        donationId: donationId,
        title: title,
        fromAccepted: true,
      });
    } else {
      navigation.navigate("pendingReqView", {
        donationId: donationId,
        title: title,
        fromAccepted: false,
      });
    }
  };
  return (
    <View>
      <TouchableOpacity
        style={styles.mainView}
        onPress={() =>
          navigation.navigate("donationView", { donationId: donationId })
        }
      >
        <View style={styles.mainRow}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{
              uri: imageUrl,
            }}
          />
          <View style={styles.mainColumn}>
            <Text style={styles.heading}>{title}</Text>
            <Text
              ellipsizeMode="tail"
              numberOfLines={2}
              style={styles.description}
            >
              {description}
            </Text>
            <Chip
              icon={() => (
                <Icon
                  name="account-supervisor-outline"
                  size={20}
                  color="green"
                />
              )}
              // icon="checkbox-marked-circle-outline"
              onPress={navigateToReqView}
              style={{
                width: 168,
                marginLeft: 25,
                marginTop: 10,
              }}
            >
              View Requests
            </Chip>
          </View>
        </View>
        <View style={styles.mainRow}></View>
      </TouchableOpacity>
    </View>
  );
};

export default PendingReqCard;
