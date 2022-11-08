import { StyleSheet } from "react-native";

const createDonationStyles = StyleSheet.create({
  descriptionInput: {
    width: 347,
    height: 123,
    marginLeft: 23,
    backgroundColor: "white",
  },
  imageRow: {
    flexDirection: "row",
  },
  imageStyle: {
    width: 110,
    height: 98,
    marginLeft: 35,
    marginTop: 13,
  },
  checkBoxView: {
    marginLeft: 29,
    marginTop: 21,
  },
  sharetext: {
    marginTop: 28,
    marginLeft: 10,
  },
  sharetext2: {
    marginLeft: 91,
    fontWeight: "600",
  },
  sharetext3: {
    marginLeft: 51,
    marginTop: 22,
    fontWeight: "600",
  },
  createButton: {
    marginTop: 55,
    marginBottom: 50,
    width: 281,
    marginLeft: 55,
    borderRadius: 32,
    backgroundColor: "green",
  },
  scrollView: {
    marginTop: 15,
  },
});

export default createDonationStyles;
