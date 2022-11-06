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
import { TextInput, IconButton } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import axios from "axios";
import PascalCase from "../components/PascalCase";
import DonatorCard from "../components/donator/DonatorCard";
import { useNavigation } from "@react-navigation/native";

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
        // marginTop: 20,
        paddingTop: 10,
        backgroundColor: "white",
        paddingBottom: 20,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <IconButton icon="account-multiple" />
        <Text
          style={{
            marginTop: 15,
            marginLeft: 100,
          }}
        >
          All donations
        </Text>
      </View>
      <TextInput
        mode="outlined"
        activeOutlineColor="black"
        outlineColor="#9FA5AA"
        // label="Name"
        label="Seaxzsssssxrch"
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

      <ScrollView
        // stickyHeaderIndices={[0]}
        style={{
          backgroundColor: "#FFFFFF",
          // marginTop: 10,
          paddingLeft: 10,
          paddingTop: 20,
        }}
      >
        <ActivityIndicator size="large" color="#1FBB61" />
        {/* <Text
        style={{
          fontWeight: "600",
          color: "#111010",
          // marginLeft: "32",
          paddingLeft: 30,
        }}
      >
        Your Name
        <Text
          style={{
            color: "red",
          }}
        >
          *
        </Text>
      </Text> */}
        <TextInput
          mode="outlined"
          activeOutlineColor="black"
          outlineColor="#9FA5AA"
          // label="Name"
          label="Name"
          left={
            <TextInput.Icon
              icon="eye"
              color="#ADB2B6"
              style={
                {
                  // paddingTop: 10,
                  // width: 20,
                  // height: 20,
                }
              }
            />
          }
          style={{
            width: 347,
            height: 47,
            marginLeft: 23,
            backgroundColor: "white",
          }}
        ></TextInput>
        <Text
          style={{
            fontWeight: "600",
            color: "#111010",
            // marginLeft: "32",
            paddingLeft: 30,
          }}
        >
          Your Name
          <Text
            style={{
              color: "red",
            }}
          >
            *
          </Text>
        </Text>
        <TextInput
          mode="outlined"
          activeOutlineColor="black"
          outlineColor="#9FA5AA"
          // label="Name"
          // label="Name"
          placeholder="NAme"
          left={
            <TextInput.Icon
              icon="eye"
              color="#ADB2B6"
              style={{
                paddingTop: 10,
              }}
            />
          }
          style={{
            width: 347,
            height: 47,
            marginLeft: 23,
            backgroundColor: "white",
          }}
        ></TextInput>

        {/* <Text>Dsd</Text>

      <Text>Dsd</Text>
      <Text>Dsd</Text>
      <Text>Dsd</Text> */}

        <Button title="Go back" onPress={() => btnsbmit()} />
        {/* <View style={styles.centering}>
        <LinearGradient
          // Button Linear Gradient
          colors={["rgba(19, 177, 86, 1)", "rgba(50, 203, 115, 1)"]}
          style={styles.button}
        >
          <Text style={styles.text}>Send Request</Text>
        </LinearGradient>
      </View> */}
        <PascalCase />
        <DonatorCard imageUrl="https://i.postimg.cc/8sgfPncS/Food-Donation-For-100-Children.png" />
        <DonatorCard imageUrl="https://i.postimg.cc/8sgfPncS/Food-Donation-For-100-Children.png" />

        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Button title="Pick an image from camera roll" onPress={pickImage} />
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </View>
        <DonatorCard imageUrl="https://i.postimg.cc/8sgfPncS/Food-Donation-For-100-Children.png" />
        <DonatorCard imageUrl="https://i.postimg.cc/8sgfPncS/Food-Donation-For-100-Children.png" />
        <DonatorCard imageUrl="https://i.postimg.cc/8sgfPncS/Food-Donation-For-100-Children.png" />
        <DonatorCard imageUrl="https://i.postimg.cc/8sgfPncS/Food-Donation-For-100-Children.png" />
      </ScrollView>
    </View>
  );
}
