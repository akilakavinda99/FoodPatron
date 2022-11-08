import { StyleSheet } from "react-native";

const ViewFundStyles = StyleSheet.create({
    body: {
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    fundImage: {
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        height: 185,
        elevation: 5,
    },
    fundTitle: {
        fontSize: 22,
        marginBottom: 8,
        fontWeight: "700",
        textAlign: 'center',
    },
    label: {
        fontSize: 14,
        color: "#09101D",
        fontWeight: "500",
        width: '15%',
    },
    text: {
        fontSize: 15,
        fontWeight: "300",
        color: "#09101D",
        width: '80%',
        textAlign: 'justify',
    },
    section: {
        fontSize: 14,
        color: "#09101D",
        fontWeight: "500",
    },
    description: {
        fontSize: 15,
        fontWeight: "300",
        color: "#09101D",
        textAlign: 'justify',
    },
    errorText: {
        color: 'red',
        marginLeft: 20,
        fontSize: 10,
    },
});

export default ViewFundStyles;
