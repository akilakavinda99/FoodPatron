import React from "react";
import { View, StyleSheet, Text } from "react-native";

const AdminDashboardFirstCard = (props) => {
  return (
    <View style={styles.cardView}>
      <Text style={styles.firstLine}>{props.firstLine}</Text>
      <Text style={styles.firstLine}>{props.secondLine}</Text>
      <Text style={styles.firstLine}>{props.number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    paddingTop: 10,
    height: 92,
    width: 140,
    backgroundColor: "#DBBC50",
    borderRadius: 12,
    marginBottom: 30,
  },
  firstLine: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 17,
  },
});

export default AdminDashboardFirstCard;
