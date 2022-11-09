import { StyleSheet } from "react-native";

const adminDashboardStyles = StyleSheet.create({
  mainView: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    paddingLeft: 39,
    paddingRight: 45,
  },
  title: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 26,
    marginTop: 40,
    marginBottom: 36,
  },
  titleRow: {
    flexDirection: "row",
    marginTop: 20,
  },
  firstRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: {
    marginTop: 15,
    fontSize: 20,
    marginLeft: 50,
    fontWeight: "bold",
  },

  backButton: {
    marginLeft: 25,
    marginTop: 12,
  },
  createicon: {
    marginLeft: 75,
    marginTop: 18,
  },
  inputIcon: {
    paddingTop: 10,
  },
  searchInput: {
    width: 347,
    height: 47,
    marginLeft: 23,
    backgroundColor: "#F6F6F6",
    marginBottom: 20,
    borderRadius: 100,
  },
});

export default adminDashboardStyles;
