import React, { useEffect, useState } from "react";
import { ActivityIndicator, Pressable, ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import FAcon from 'react-native-vector-icons/Feather';
import FormTextInput from "../../components/organization/FormTextInput";
import GradientButton from "../../components/organization/GradientButton";
import ViewFundStyles from '../fund/styles/ViewFundStyles'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { changeOrganizationPassword } from "../../api/organization.api";

const ChangeOrgPassword = () => {
    // const organizationID = "6336ad5ea9f14b49dbf42f8c"; // for testing
    const navigation = useNavigation();

    const [formErrors, setFormErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [organizationID, setOrganizationID] = useState("");
    const [newPassword, setNewPassword] = useState("")
    const [rePassword, setRePassword] = useState("")

    const changePassword = () => {
        setFormErrors({})
        if (newPassword.length < 8) {
            setFormErrors({ newPassword: "Password must be at least 8 characters long" })
        } else if (newPassword !== rePassword) {
            setFormErrors({ rePassword: "Passwords do not match" })
        } else {
            setIsSubmitting(true)
            setFormErrors({})
        }
    }

    const getOrgID = async () => {
        const orgID = await AsyncStorage.getItem("userID");
        setOrganizationID(orgID);
    }

    useEffect(() => {
        getOrgID();
    }, [organizationID])

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            changeOrganizationPassword(organizationID, { password: newPassword })
                .then(res => {
                    navigation.navigate("OrgProfile")
                }).catch(err => {
                    console.log(err);
                })
            setIsSubmitting(false)
        } else {
            setIsSubmitting(false)
        }
    }, [formErrors, isSubmitting])

    return (
        <View style={{
            backgroundColor: "white",
            height: "100%",
        }}>
            <SafeAreaView style={{
                backgroundColor: "#fff",
                paddingLeft: 20,
                paddingVertical: 14,
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Pressable onPress={() => { navigation.goBack() }}>
                        <FAcon name='arrow-left' color='#13B156' size={24} />
                    </Pressable>
                    <Text style={{
                        fontSize: 20,
                        marginLeft: 16,
                        fontWeight: "500",
                    }}>Change Password</Text>
                </View>
            </SafeAreaView>
            <ScrollView style={{ paddingHorizontal: 20 }}>
                <FormTextInput title="New Password" placeholder="Enter new password" required={true}
                    onChangeText={(value) => setNewPassword(value)} secureTextEntry={true} />
                <Text style={ViewFundStyles.errorText}>{formErrors.newPassword}</Text>

                <FormTextInput title="Confirm Password" placeholder="Re-type the new password" required={true}
                    onChangeText={(value) => setRePassword(value)} secureTextEntry={true} />
                <Text style={ViewFundStyles.errorText}>{formErrors.rePassword}</Text>


                <View style={{
                    height: 55,
                    marginVertical: 24,
                }}>
                    <GradientButton text="Update" onPress={changePassword} />
                </View>
            </ScrollView>
        </View>
    );
};

export default ChangeOrgPassword;
