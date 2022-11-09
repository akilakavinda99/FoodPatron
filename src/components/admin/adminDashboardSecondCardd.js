import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const AdminDashboardSecondCardd = (props) => {
  return (
    <View style={props.reverse ? styles.mainViewReverse : styles.mainView}>
      <View style={styles.imageView}>
        <Image />
      </View>
      <View style={styles.textView}>
        <Text>Sdsd</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginTop: 10,
    width: 312,
    height: 131,
    flex: 1,
    borderRadius: 30,
    flexDirection: "row",
  },
  mainViewReverse: {
    marginTop: 10,
    width: 312,
    height: 131,
    flexDirection: "row-reverse",
    flex: 1,
    borderRadius: 12,
  },
  imageView: {
    flex: 3,
    backgroundColor: "black",
  },
  textView: {
    flex: 4,
    backgroundColor: "#B8EEB3",
  },
});

export default AdminDashboardSecondCardd;
