import { StyleSheet } from "react-native";

const adminDashboardStyles = StyleSheet.create({
  mainView: {
    backgroundColor: "white",
    height: "100%",
  },

  titleRow: {
    flexDirection: "row",
    marginTop: 20,
  },

  titleText:{
    marginTop: 15,
    fontSize: 20,
    marginLeft:50,
    fontWeight:"bold",
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
