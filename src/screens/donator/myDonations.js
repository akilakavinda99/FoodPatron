import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { IconButton, TextInput } from "react-native-paper";
import MyDonationCard from "../../components/donator/MyDonationCard";
import { getUserDonation } from "../../api/donator.api";
import myDonationStyles from "./styles/MyDonationStyles";
import { useNavigation } from "@react-navigation/native";

const MyDonations = () => {
  const userId = "63425985a2f0b4b546de6621";
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    setLoading(true);
    getUserDonation(userId)
      .then((res) => {
        console.log(res.data);
        setDonations(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);

        Alert.alert("An Error Occoured");
        console.log(err.response);
      });
  }, []);
  return (
    <View>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <IconButton
          icon="arrow-left"
          style={myDonationStyles.backIcon}
          onPress={() => navigation.goBack()}
        />
        <Text style={myDonationStyles.title}>My donations</Text>
      </View>
      <TextInput
        theme={{ roundness: 100 }}
        mode="outlined"
        activeOutlineColor="black"
        outlineColor="#9FA5AA"
        label="Search"
        // onChangeText={(value) => setsearchTerm(value)}
        left={
          <TextInput.Icon
            icon="text-search"
            color="#ADB2B6"
            style={{
              paddingTop: 10,
            }}
          />
        }
        style={myDonationStyles.searchInput}
      />
      <View>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <View>
            {donations.map((donation) => {
              return (
                <MyDonationCard
                  key={donation._id}
                  title={donation.donationTitle}
                  imageUrl={donation.donationImage}
                  donation={donation}
                  onMark={(value) => setLoading(value)}
                  status={donation.status}
                />
              );
            })}
          </View>
        )}
      </View>
    </View>
  );
};

export default MyDonations;
