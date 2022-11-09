import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, ScrollView, Text, View } from "react-native";
import { FAB, IconButton, TextInput } from "react-native-paper";
import { getHomeDonations } from "../../api/donator.api";
import { getAllDonations } from "../../api/home.api";
import adminDashboardStyles from "./styles/adminDashboardStyles";
import DonatorCard from "../../components/donator/DonatorCard";
import AdminDashboarCard from "../../components/admin/adminDashboardCard";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AdminDashboardFirstCard from "../../components/admin/adminDashboardFirstCard";
import AdminDashboardSecondCardd from "../../components/admin/adminDashboardSecondCardd";

const AdminDashboard = () => {
  return (
    <ScrollView style={adminDashboardStyles.mainView}>
      <Text style={adminDashboardStyles.title}>Admin Dashboard</Text>
      <View style={adminDashboardStyles.firstRow}>
        <AdminDashboardFirstCard
          firstLine="New"
          secondLine="Organization"
          number="05"
        />
        <AdminDashboardFirstCard
          firstLine="New Fundraiser"
          secondLine="Requests"
          number="05"
        />
      </View>
      <ScrollView>
        <AdminDashboardSecondCardd reverse={true} />
        <AdminDashboardSecondCardd reverse={false} />
        <AdminDashboardSecondCardd reverse={true} />
        <AdminDashboardSecondCardd reverse={true} />
      </ScrollView>
    </ScrollView>
  );
};

export default AdminDashboard;
