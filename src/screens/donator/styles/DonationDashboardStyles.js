import { StyleSheet } from "react-native";

const donationdashoboardStyles = StyleSheet.create({
  mainView: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 30,
  },
  myCard: {
    backgroundColor: "#1FBB61",
    height: 149,
    borderRadius: 20,
  },
  myIcon: {
    marginLeft: 150,
    marginTop: 20,
  },
  dshbrdText: {
    textAlign: "center",
    fontSize: 36,
    fontWeight: "700",
    color: "white",
    marginBottom: 35,
  },
  dashbrdRow: {
    flexDirection: "row",
    marginTop: 40,
  },
  approvedReq: {
    width: 154,
    height: 157,
    backgroundColor: "#9AE875",
    borderRadius: 20,
    marginRight: 49,
  },
  pendText: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
  },
  pendIcon: {
    marginTop: 35,
    marginLeft: 60,
    marginBottom: 12,
  },
  pendingReq: {
    width: 154,
    height: 157,
    backgroundColor: "#9AE875",
    borderRadius: 20,
  },
  chartStyle: {
    marginRight: 30,
    marginTop: 30,
    borderRadius: 20,
  },
});

export default donationdashoboardStyles;
