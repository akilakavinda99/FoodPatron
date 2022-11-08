import React from "react";
import { View, TouchableOpacity, Image, Text, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { Chip } from "react-native-paper";
import {
  deleteDonationRequest,
  markDonationCompleted,
} from "../../api/donator.api";
import styles from "./styles/DonatorCardStyles";
import myDonationCardStyles from "./styles/MyDonationCardStyles";

const MyDonationCard = ({
  imageUrl,
  title,
  donationId,
  status,
  donation,
  onMark,
}) => {
  const navigation = useNavigation();
  const navigateToEdit = () => {
    navigation.navigate("editDonation", { donation: donation });
  };

  const deleteDonation = () => {
    Alert.alert("Delete Donation", "Are you sure?", [
      {
        text: "Cancel",
        onPress: () => console.log("OK Pressed"),
      },

      {
        text: "OK",
        onPress: () => {
          onMark(true);
          deleteDonationRequest(donation._id)
            .then((res) => {
              onMark(false);
              Alert.alert("success", "Donation Successfully Deleted");
            })
            .catch((err) => {
              console.log(err.response);
              onMark(false);
            });
        },
      },
    ]);
  };

  // Mark as complete function
  const markAsCompleted = () => {
    Alert.alert("Mark donation completed", "Are you sure?", [
      {
        text: "Cancel",
        onPress: () => console.log("OK Pressed"),
      },

      {
        text: "OK",
        onPress: () => {
          onMark(true);
          markDonationCompleted(donation._id)
            .then((res) => {
              onMark(false);
              Alert.alert("success", "Donation Successfully Completed");
            })
            .catch((err) => {
              console.log(err.response);
              onMark(false);
            });
        },
      },
    ]);
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
            {status == "completed" ? (
              <>
                <Chip
                  icon={() => <Icon name="check" size={20} color="green" />}
                  style={myDonationCardStyles.completedChip}
                >
                  Completed
                </Chip>
                <Chip
                  icon={() => (
                    <Icon name="delete-outline" size={20} color="red" />
                  )}
                  // icon=""
                  onPress={deleteDonation}
                  style={myDonationCardStyles.completedDeleteChip}
                >
                  Delete
                </Chip>
              </>
            ) : (
              <>
                <Chip
                  icon={() => (
                    <Icon
                      name="checkbox-marked-circle-outline"
                      size={20}
                      color="green"
                    />
                  )}
                  onPress={markAsCompleted}
                  style={myDonationCardStyles.completedChip}
                >
                  Mark as Completed
                </Chip>
                <View style={{ flexDirection: "row" }}>
                  <Chip
                    icon={() => (
                      <Icon name="delete-outline" size={20} color="red" />
                    )}
                    onPress={deleteDonation}
                    style={myDonationCardStyles.deleteChip}
                  >
                    Delete
                  </Chip>
                  <Chip
                    icon="square-edit-outline"
                    onPress={navigateToEdit}
                    style={myDonationCardStyles.editChip}
                  >
                    Edit
                  </Chip>
                </View>
              </>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MyDonationCard;
