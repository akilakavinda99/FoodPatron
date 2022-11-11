import React, { useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput, IconButton, Chip } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import axios from "axios";
import PascalCase from "../components/PascalCase";
import DonatorCard from "../components/donator/DonatorCard";
import { useNavigation } from "@react-navigation/native";
import { logOut } from "../utils/logout";
import PageHeader from "../components/organization/PageHeader";
import CustomeSearchBar from "../components/organization/SearchBar";
import OrganizationFundsCard from "../components/organization/OrganizationFundsCard";

export default function SecondScreen() {
  const [image, setImage] = useState(null);
  var image1;
  var res;
  var imageUri;
  const navigation = useNavigation();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
      base64: true,
    });

    // console.log(base64);
    imageUri = result ? `data:image/jpg;base64,${result.base64}` : null;
    console.log(imageUri);
    image1 = imageUri;
    res = {
      base64: imageUri,
    };
    // try {
    //   await axios
    //     .post("http://192.168.8.134:8070/donator/test", res)
    //     .then((result) => {
    //       console.log(result);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // } catch (error) {
    //   console.log(error);
    // }

    // imageUri && console.log({ uri: imageUri.slice(0, 100) });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  let btnsbmit = async () => {
    navigation.navigate("allDonations");
  };

  var styles = StyleSheet.create({
    button: {
      // flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 30,
      width: 281,
      height: 47,
      marginTop: 10,
      marginLeft: 10,
      alignItems: "center",

      // display: "flex",
      // justifyContent: "center",
    },
    centering: {
      flexDirection: "column", // inner items will be added vertically
      flexGrow: 1, // all the available vertical space will be occupied by it
      justifyContent: "space-between",
      bottom: 0,
      marginTop: 10,
      alignItems: "center",
      flex: 1,
    },
    text: {
      fontSize: 15,
      // fontFamily: "Gill Sans",
      textAlign: "center",
      margin: 10,
      color: "#ffffff",
      backgroundColor: "transparent",
    },
  });
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <PageHeader title="Food Patron" icon="heart" />
        <Chip
          style={{
            backgroundColor: "#E8F8EF",
            borderColor: "#13B156",
            borderWidth: 1,
            marginHorizontal: 5,
            marginVertical: 10,
            width: 88,
            marginLeft: 30,

            height: 30,
            marginTop: 40,
          }}
        >
          Register
        </Chip>
        <Chip
          style={{
            backgroundColor: "#E8F8EF",
            borderColor: "#13B156",
            borderWidth: 1,
            marginHorizontal: 5,
            marginVertical: 10,
            width: 78,

            height: 30,
            marginTop: 40,
          }}
        >
          Log in
        </Chip>
      </View>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <CustomeSearchBar
        // onSearch={(search) => {
        //   setsearchTerm(search);
        // }}
        />
      </View>
      <Text
        style={{
          fontWeight: "600",
          marginTop: 30,
          marginLeft: 30,
        }}
      >
        About us
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginLeft: 30,
          paddingTop: 23,
        }}
      >
        <Image
          style={{ borderRadius: 8 / 2 }}
          source={{
            width: 110,
            height: 109,

            uri: "https://i.postimg.cc/zD9tgsxm/184282669-happy-volunteers-packing-food-in-donation-boxes.webp",
          }}
        />
        <Text
          style={{
            marginLeft: 13,
            marginRight: 130,
            fontWeight: "400",
          }}
        >
          A non-profit, charitable mobile application that distributes food to
          those who have difficulty purchasing enough to avoid hunger and
          provide sustainable agriculture solutions
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontWeight: "600",
            marginTop: 30,
            marginLeft: 30,
          }}
        >
          Featured Events
        </Text>
        <Text
          style={{
            fontWeight: "600",
            marginTop: 30,
            marginRight: 50,
            color: "#4D8BDB",
            // marginLeft: 30,
          }}
        >
          See More
        </Text>
      </View>
      <View>{/* <OrganizationFundsCard /> */}</View>
    </View>
  );
}
