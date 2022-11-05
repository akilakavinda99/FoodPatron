import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

import donationdashoboardStyles from "./styles/DonationDashboardStyles";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
const screenWidth = Dimensions.get("window").width;

const DonationDashboard = () => {
  const navigation = useNavigation();
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `grey`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ["Requests"], // optional
  };
  const chartConfig = {
    backgroundColor: "white",
    backgroundGradientFrom: "black",
    backgroundGradientTo: "white",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `black`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "black",
    },
    style: {
      borderRadius: 16,
    }, // optional
  };

  const navigateToMyDonation = () => {
    navigation.navigate("myDonations");
  };
  const navigateToAccepted = () => {
    navigation.navigate("acceptedRequests");
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
          style={{
            marginRight: 30,
            marginTop: 30,
            borderRadius: 20,
          }}
          height={220}
          chartConfig={chartConfig}
          getDotColor={() => "black"}
        />
      </View>
    </ScrollView>
  );
};

export default DonationDashboard;
