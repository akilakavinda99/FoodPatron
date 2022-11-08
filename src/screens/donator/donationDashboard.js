import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { LineChart } from "react-native-chart-kit";
import { useNavigation } from "@react-navigation/native";
import { chartConfig, data } from "../../constants/chartData";
import donationdashoboardStyles from "./styles/DonationDashboardStyles";

const screenWidth = Dimensions.get("window").width;

const DonationDashboard = () => {
  const navigation = useNavigation();

  const navigateToMyDonation = () => {
    navigation.navigate("myDonations");
  };
  const navigateToAccepted = () => {
    navigation.navigate("acceptedReq");
  };
  const navigateToPending = () => {
    navigation.navigate("pendingRequests");
  };
  return (
    <ScrollView style={donationdashoboardStyles.mainView}>
      <TouchableOpacity onPress={navigateToMyDonation}>
        <View style={donationdashoboardStyles.myCard}>
          <FontAwesome5
            name="people-carry"
            size={50}
            color="white"
            style={donationdashoboardStyles.myIcon}
          />

          <Text style={donationdashoboardStyles.dshbrdText}>My Donations</Text>
        </View>
      </TouchableOpacity>

      <View style={donationdashoboardStyles.dashbrdRow}>
        <TouchableOpacity onPress={navigateToPending}>
          <View style={donationdashoboardStyles.approvedReq}>
            <MaterialIcons
              name="pending-actions"
              size={40}
              style={donationdashoboardStyles.pendIcon}
            />
            <Text style={donationdashoboardStyles.pendText}>
              Pending Requests
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToAccepted}>
          <View style={donationdashoboardStyles.pendingReq}>
            <MaterialIcons
              name="assignment-turned-in"
              size={40}
              style={donationdashoboardStyles.pendIcon}
            />
            <Text style={donationdashoboardStyles.pendText}>
              Approved Requests
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <LineChart
          data={data}
          width={screenWidth}
          style={donationdashoboardStyles.chartStyle}
          height={220}
          chartConfig={chartConfig}
          getDotColor={() => "black"}
        />
      </View>
    </ScrollView>
  );
};

export default DonationDashboard;
