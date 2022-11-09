import AsyncStorage from "@react-native-async-storage/async-storage";

export const logOut = async () => {
    try {
        console.log("Logging out");
        await AsyncStorage.multiRemove(['userEmail', 'userRole', 'userID', 'userToken']);
    } catch (e) {
        console.log(e);
    }
}