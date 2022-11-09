import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, ScrollView, Text, View } from "react-native";
import { FAB, IconButton, TextInput } from "react-native-paper";
import { getHomeDonations } from "../../api/donator.api";
import { getAllDonations } from "../../api/home.api";
import adminDashboardStyles from "./styles/adminDashboardStyles";
import DonatorCard from "../../components/donator/DonatorCard";
import AdminDashboarCard from "../../components/admin/adminDashboardCard"
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AdminOrganizationRegisterRequests = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [donations, setDonations] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const [showingFunds, setShowingFunds] = useState([]);

  // Get donations
  useEffect(() => {
    setLoading(true);
    getHomeDonations()
      .then((res) => {
        // console.log(res.data);
        setDonations(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);

        Alert.alert("An Error Occoured");
        console.log(err.response);
      });
  }, []);

  // Search function
  useEffect(() => {
    setShowingFunds(
      donations.filter(
        (fund) =>
          fund.donationTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
          fund.donationDescription
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, donations]);

  const navigateToDonationCreate = () => {
    navigation.navigate("createDonation");
  };

  return (
    <View style={adminDashboardStyles.mainView}>
      <View style={adminDashboardStyles.titleRow}>
        <Text
          style={adminDashboardStyles.titleText}>
          FoodPatron
        </Text>
      </View>
      <View>
        {loading ? (
          <ActivityIndicator
            size="large"
            style={{
              marginTop: 300,
            }}
          />
        ) : donations.length == 0 ? (
          <Text>No items</Text>
        ) : donations.length > 0 && showingFunds.length == 0 ? (
          <Text>No search results</Text>
        ) : (
          <>
            <ScrollView style={{ marginBottom: 150 }}>
              <View>
                {donations.map((donation) => (
                  <AdminDashboarCard
                    key={donation._id}
                    donationId={donation._id}
                    imageUrl={donation.donationImage}
                    requests={donation.numberOfRequests}
                    location={donation.location}
                    description={donation.donationDescription}
                    title={donation.donationTitle}
                  />
                ))}
              </View>
            </ScrollView>
          </>
        )}
      </View>
    </View>
  );
};

export default AdminOrganizationRegisterRequests;
