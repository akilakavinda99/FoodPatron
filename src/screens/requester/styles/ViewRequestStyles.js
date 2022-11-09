import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainView: {
        width: 375,
        height: 117,
        backgroundColor: "#d0d0d0",
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        marginTop: 15,
    },
    mainRow: {
        flexDirection: "row",
    },
    image: {
        flex: 1,
        height: 117,
        borderRadius: 10,
        maxWidth: 117,
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
});

export default styles;