import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { FAB, IconButton, TextInput } from "react-native-paper";
import SearchBar from "../../components/requester/SearchBar";
import RequestCard from "../../components/requester/RequestCard";
import { getallReq } from "../../api/requester.api";

export default function AllRequests() {
  const [loading, setLoading] = useState(false);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    setLoading(true);
    getallReq()
      .then((res) => {
        console.log(res.data);
        setRequests(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);

        Alert.alert("An Error Occoured");
        console.log(err.response);
      });
  }, []);

  return (
    <View
      style={{
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
            marginLeft: 50,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {" "}
          Fund Requests
        </Text>
      </View>

      <SearchBar />
      <View>
        {loading ? (
          <ActivityIndicator
            size="large"
            style={{
              marginTop: 300,
            }}
          />
        ) : requests.length == 0 ? (
          <Text>No items</Text>
        ) : (
          <ScrollView>
            {requests.map((request) => {
              return (
                <RequestCard
                  key={request._id}
                  image={request.requestImage}
                  title={request.title}
                  description={request.description}
                  address={request.address}
                  country={request.country}
                  fund={request}
                />
              );
            })}
          </ScrollView>
        )}
      </View>
    </View>
  );
}
