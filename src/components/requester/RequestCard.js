import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import styles from "../../screens/requester/styles/ViewRequestStyles";
import { useNavigation } from "@react-navigation/native";

export default function RequestCard(props) {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("fundReqView", { fund: props.fund })}
    >
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 10,
          margin: 5,
          marginVertical: 10,
          marginHorizontal: 20,
          flexDirection: "row",
          height: 130,
          elevation: 5,
          borderColor: "#E8E8E8",
        }}
      >
        <Image
          style={{
            flex: 1,
            height: 130,
            borderRadius: 10,
            maxWidth: 117,
          }}
          resizeMode="cover"
          source={{
            uri: props.image,
          }}
        />

        <View
          style={{
            flex: 2,
            flexDirection: "column",
            paddingHorizontal: 10,
            paddingTop: 5,
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              fontSize: 18,
              marginBottom: 8,
              fontWeight: "600",
            }}
          >
            {props.title}
          </Text>

          <Text
            numberOfLines={3}
            style={{
              fontSize: 13,
              fontWeight: "300",
              color: "#09101D",
              textAlign: "justify",
              marginBottom: 16,
            }}
          >
            {props.description}
          </Text>

          <Text
            numberOfLines={1}
            style={{
              fontSize: 11,
              fontWeight: "300",
              color: "#09101D",
              textAlign: "justify",
            }}
          >
            {props.address}
          </Text>

          <Text
            numberOfLines={1}
            style={{
              fontSize: 11,
              fontWeight: "300",
              color: "#09101D",
              textAlign: "justify",
            }}
          >
            {props.country}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
