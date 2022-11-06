import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Alert,
} from "react-native";
import { Chip } from "react-native-paper";
import styles from "./styles/DonatorCardStyles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import EditDonation from "../../screens/donator/editDonation";
import { markDonationCompleted } from "../../api/donator.api";

const MyDonationCard = ({
  imageUrl,
  title,
  description,
  requests,
  location,
  donationId,
  status,
  donation,
  onMark,
}) => {
  const navigation = useNavigation();
  const navigateToEdit = () => {
    // return <EditDonation donations={donation} />;
    navigation.navigate("editDonation", { donation: donation });
  };

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
    // onMark(true);
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
                  icon={() => (
                    <Icon
                      name="checkbox-marked-circle-outline"
                      size={20}
                      color="green"
                    />
                  )}
                  // icon="checkbox-marked-circle-outline"
                  onPress={() => console.log("Pressed")}
                  style={{
                    width: 168,
                    marginLeft: 25,
                  }}
                >
                  Mark as Completed
                </Chip>
                <Chip
                  icon={() => (
                    <Icon name="delete-outline" size={20} color="red" />
                  )}
                  // icon=""
                  onPress={() => console.log("Pressed")}
                  style={{
                    width: 85,
                    marginLeft: 60,
                    marginTop: 10,
                  }}
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
                  // icon="checkbox-marked-circle-outline"
                  onPress={markAsCompleted}
                  style={{
                    width: 168,
                    marginLeft: 25,
                  }}
                >
                  Mark as Completed
                </Chip>
                <View style={{ flexDirection: "row" }}>
                  <Chip
                    icon={() => (
                      <Icon name="delete-outline" size={20} color="red" />
                    )}
                    // icon=""
                    onPress={() => console.log("Pressed")}
                    style={{
                      width: 85,
                      marginLeft: 10,
                      marginTop: 10,
                    }}
                  >
                    Delete
                  </Chip>
                  <Chip
                    icon="square-edit-outline"
                    onPress={navigateToEdit}
                    style={{
                      width: 85,
                      marginLeft: 23,
                      marginTop: 10,
                    }}
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
