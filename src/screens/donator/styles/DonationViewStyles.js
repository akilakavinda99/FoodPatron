import { StyleSheet } from "react-native";

const donationViewStyles = StyleSheet.create({
  mainView: {
    backgroundColor: "#ededed",
    height: "100%",
  },
  activityIndicator: {
    marginTop: 350,
  },
  descriptionView: {
    marginLeft: 15,
  },
  descriptionView2: {
    marginTop: 88,
    marginLeft: 33,
    marginRight: 27,
    width: 300,
    marginBottom: 30,
  },
  contactView: {
    backgroundColor: "grey",
    marginLeft: 35,
    marginRight: 27,
    borderRadius: 10,
    width: 287,
    height: 120,
    marginTop: 20,
  },

  contactRow: {
    flexDirection: "row",
    marginTop: 26,
  },
  iconView: {
    height: 50,
    width: 50,
    backgroundColor: "#415171",
    borderRadius: 50,
    marginLeft: 43,
  },
  mailIcon: {
    marginTop: 13,
    marginLeft: 13,
  },
  callIconView: {
    height: 50,
    width: 50,
    backgroundColor: "#415171",
    borderRadius: 50,
    marginLeft: 97,
  },
  callIcon: { marginTop: 12, marginLeft: 15 },
  textView: {
    marginTop: 20,
  },
  textStyle1: {
    textAlign: "center",
    fontWeight: "600",
  },
  sendReq: {
    marginTop: 67,
    width: 281,
    marginLeft: 35,
    borderRadius: 32,
    backgroundColor: "green",
  },
});

export default donationViewStyles;
