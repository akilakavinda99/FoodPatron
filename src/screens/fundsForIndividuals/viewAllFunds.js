import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  Text,
} from "react-native";
import { Snackbar } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Micon from "react-native-vector-icons/MaterialIcons";
import { getFundByOrganization, getFundByStatus } from "../../api/fund.api";
import OrganizationFundsCard from "../../components/organization/OrganizationFundsCard";
import PageHeader from "../../components/organization/PageHeader";
import CustomeSearchBar from "../../components/organization/SearchBar";
import { getRemainingTime } from "../../utils/getRemainingTime";

function ViewAllFunds({ snackNotification }) {
  const isFocused = useIsFocused();

  const [funds, setFunds] = useState([]);
  const [showingFunds, setShowingFunds] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [snackBarVisible, setSnackBarVisible] = useState(false);

  useEffect(() => {
    if (snackNotification) {
      // setSnackBarVisible(true);
      // snackNotification = "";
      // route.params.snackNotification = "";
    }
  }, [snackNotification, isFocused]);

  useEffect(() => {
    setLoading(true);
    getFundByStatus('approved')
      .then((res) => {
        setFunds(res.data.funds);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  useEffect(() => {
    setShowingFunds(
      funds.filter(
        (fund) =>
          fund.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          fund.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, funds]);

  const onRefresh = () => {
    setRefreshing(true);
    getFundByStatus('approved')
      .then((res) => {
        setFunds(res.data.funds);
        setRefreshing(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SafeAreaProvider
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <PageHeader title="Food Patron" icon="heart" />
      <CustomeSearchBar
        onSearch={(search) => {
          setsearchTerm(search);
        }}
      />

      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={{
          marginTop: 10,
        }}
      >
        {loading ? (
          <ActivityIndicator size="large" />
        ) : funds.length == 0 ? (
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              marginVertical: 10,
              marginHorizontal: 20,
            }}
          >
            No funds found
          </Text>
        ) : funds.length > 0 && showingFunds.length == 0 ? (
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              marginVertical: 10,
              marginHorizontal: 20,
            }}
          >
            No search result
          </Text>
        ) : (
          showingFunds.map((fund) => (
            <OrganizationFundsCard
              key={fund._id}
              fundID={fund._id}
              title={fund.title}
              image={fund.fundImage}
              target={fund.target}
              donors={fund.numOfDonations + " donor(s)"}
              daysLeft={getRemainingTime(fund.endingDate)}
              raised={fund.currentAmount}
              budget={fund.budget}
              description={fund.description}
              status={fund.status}
              organizationID={fund.organizationID}
            />
          ))
        )}
      </ScrollView>

      <Snackbar
        visible={snackBarVisible}
        onDismiss={() => setSnackBarVisible(false)}
        duraration={3000}
        action={{
          label: <Micon name="close" color="#fff" size={24} />,
          onPress: () => {
            // Do something
          },
        }}
      >
        {snackNotification}
      </Snackbar>
    </SafeAreaProvider>
  );
}

export default ViewAllFunds;
