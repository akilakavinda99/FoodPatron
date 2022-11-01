import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  infoView: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: "white",
    paddingTop: 60,
  },
  box: {
    width: 311,
    height: 141,
    backgroundColor: "rgba(52, 52, 52, 0.5)",

    marginLeft: 38,
    marginRight: 32,
    marginTop: 150,
    borderRadius: 16,
    paddingLeft: 24,
    paddingTop: 16,
    paddingBottom: 24,
    paddingRight: 16,
    zIndex: 1,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
  },
  text: {
    paddingLeft: 20,
    paddingRight: 15,
    paddingTop: 5,
    textAlign: "justify",
  },
  header1: {
    fontSize: 16,
    fontWeight: "700",
    // paddingTop: 10,
  },
  header: {
    marginBottom: 5,
    fontSize: 22,
    fontWeight: "800",

    color: "#0B0A0A",
  },
  chip: {
    backgroundColor: "#7DF952",
    width: 122,
  },
  row: {
    marginTop: 10,
    flexDirection: "row",
  },
  // box1: {
  //   elevation: 3,
  // },
});

export default styles;
