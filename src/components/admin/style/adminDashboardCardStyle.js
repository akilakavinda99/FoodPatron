import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainView: {
    width: 300,
    height: 150,
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  mainRow: {
    flexDirection: "row",
  },
  image: {
    // resizeMode: "cover",
    flex: 1,
    height: 117,
    borderRadius: 10,
  },
  heading: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "600",
  },
  description: {
    fontSize: 14,
    fontWeight: "300",
    color: "#272727",
  },
  mainColumn: {
    flexDirection: "column",
    flex: 2,
    paddingLeft: 11.8,
    paddingRight: 17.8,
    paddingTop: 5,
  },
  chipStyle: {
    color: "#F6F6F6",
  },
  iconRow: {
    flexDirection: "row",
    marginLeft: 20,
  },
});

export default styles;
