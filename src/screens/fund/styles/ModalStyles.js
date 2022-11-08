import { StyleSheet } from "react-native";

const ModalStyles = StyleSheet.create({
    background: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: '100%',
        width: '100%',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '80%',
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        marginTop: 25,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
    },
    button: {
        borderRadius: 20,
        elevation: 2,
        width: '45%',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 5,
    },
    btnDeleteNo: {
        padding: 10,
        backgroundColor: '#FF395E',
    },
    btnDeleteNoText: {
        color: 'white',
    },
    btnDeleteYes: {
        padding: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#FF395E',
    },
    btnDeleteYesText: {
        color: '#FF395E',
    },
});

export default ModalStyles;