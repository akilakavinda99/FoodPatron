import React from "react";
import { ImageBackground, View, Text } from "react-native";
import styles from "./styles/DonationViewImageStyles";
import { BlurView } from "expo-blur";
import { Button, Chip } from "react-native-paper";

export default function DonationViewImage() {
  return (
    <View>
      <ImageBackground
        style={{ width: "100%", height: 300, zIndex: 1 }}
        resizeMode="cover"
        source={{
          uri: "https://i.postimg.cc/8sgfPncS/Food-Donation-For-100-Children.png",
        }}
      >
        <View
          style={{
            backgroundColor: "grey",
            borderRadius: 50,
            width: 40,
            height: 27,
            marginTop: 30,
            marginLeft: 30,
          }}
        >
          <Button
            icon="arrow-left-circle-outline"
            uppercase={false}
            style={{
              paddingLeft: 1,
            }}
            labelStyle={{
              fontSize: 20,

              color: "black",
            }}
          ></Button>
        </View>
        <BlurView intensity={100} style={styles.box} tint="default">
          <Text style={styles.header}>Food donation for children</Text>
          <Chip icon="coffee-maker-check-outline" style={styles.chip}>
            Approved
          </Chip>
          <View style={styles.row}>
            <Button
              icon="map-marker"
              uppercase={false}
              labelStyle={{
                fontSize: 15,

                color: "green",
              }}
            >
              <Text style={{ color: "black" }}>Galle</Text>
            </Button>
            <Button
              icon="account-multiple"
              style={{
                marginLeft: 90,
              }}
              labelStyle={{
                fontSize: 15,
                color: "blue",
              }}
            >
              <Text
                style={{
                  color: "black",
                }}
              >
                20
              </Text>
            </Button>
          </View>
        </BlurView>
      </ImageBackground>
    </View>
  );
}
