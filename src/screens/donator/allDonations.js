import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, ScrollView, Text, View } from "react-native";
import { FAB, IconButton, TextInput } from "react-native-paper";
import { getHomeDonations } from "../../api/donator.api";
import { getAllDonations } from "../../api/home.api";
import DonatorCard from "../../components/donator/DonatorCard";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AllDonations = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [donations, setDonations] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const [showingFunds, setShowingFunds] = useState([]);

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
    <View
      style={{
        // marginTop: 20,
        backgroundColor: "white",
        height: "100%",
      }}
    >
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <IconButton
          icon="arrow-left"
          style={{
            marginLeft: 25,
            marginTop: 12,
          }}
        />
        <Text
          style={{
            marginTop: 15,
            marginLeft: 80,
            fontSize: 20,
          }}
        >
          All donations
        </Text>

        <AntDesign
          onPress={navigateToDonationCreate}
          name="pluscircleo"
          size={24}
          color="black"
          style={{
            marginLeft: 75,
            marginTop: 18,
          }}
        />
      </View>
      <TextInput
        theme={{ roundness: 100 }}
        mode="outlined"
        activeOutlineColor="black"
        outlineColor="#9FA5AA"
        // label="Name"
        label="Search"
        onChangeText={(value) => setsearchTerm(value)}
        left={
          <TextInput.Icon
            icon="text-search"
            color="#ADB2B6"
            style={{
              paddingTop: 10,
              // width: 20,
              // height: 20,
            }}
          />
        }
        style={{
          width: 347,
          height: 47,
          marginLeft: 23,
          backgroundColor: "#F6F6F6",
          marginBottom: 20,
          borderRadius: 100,
        }}
      ></TextInput>
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
                  <DonatorCard
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

export default AllDonations;
