import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { FAB, IconButton, TextInput } from "react-native-paper";
import { getHomeDonations } from "../../api/donator.api";
import { getAllDonations } from "../../api/home.api";
import DonatorCard from "../../components/donator/DonatorCard";

const AllDonations = () => {
  const [loading, setLoading] = useState(false);
  const [donations, setDonations] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const [showingFunds, setShowingFunds] = useState([]);

  useEffect(() => {
    setLoading(true);
    getHomeDonations()
      .then((res) => {
        console.log(res.data);
        setDonations(res.data);
        setLoading(false);
      })
      .catch((err) => {
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

  return (
    <View
      style={{
        marginTop: 20,
        backgroundColor: "white",
        height: "100%",
      }}
    >
      <View style={{ flexDirection: "row" }}>
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
        <View
          style={{
            borderRadius: 50,
            width: 40,
            height: 40,
            backgroundColor: "grey",
            marginLeft: 60,
            marginTop: 10,
          }}
        >
          <IconButton icon="plus" style={{ width: 30, height: 30 }} />
        </View>
      </View>
      <TextInput
        mode="outlined"
        activeOutlineColor="black"
        outlineColor="#9FA5AA"
        // label="Name"
        label="Search"
        onChangeText={(value) => setsearchTerm(value)}
        left={
          <TextInput.Icon
            icon="eye"
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
        }}
      ></TextInput>
      <View>
        {loading ? (
          <ActivityIndicator />
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
