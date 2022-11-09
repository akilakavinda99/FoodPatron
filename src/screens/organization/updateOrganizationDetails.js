import React, { useEffect, useState } from "react";
import { ActivityIndicator, Pressable, ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import FAcon from 'react-native-vector-icons/Feather';
import FormTextInput from "../../components/organization/FormTextInput";
import GradientButton from "../../components/organization/GradientButton";
import { getOrganizationByID, updateOrganization } from "../../api/organization.api";
import ViewFundStyles from '../fund/styles/ViewFundStyles'
import { OrgDetailsUpdateValidation } from "../../components/organization/OrgFormValidation";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UpdateOrganizationDetails = () => {
    // const organizationID = "6336ad5ea9f14b49dbf42f8c"; // for testing
    const navigation = useNavigation();

    const [orgData, setOrgData] = useState(null)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [organizationID, setOrganizationID] = useState("");

    const onChange = (name, value) => {
        setOrgData({ ...orgData, [name]: value })
    }

    const onUpdatePress = () => {
        setFormErrors(OrgDetailsUpdateValidation(orgData))
        setIsSubmitting(true)
    }

    const getOrgID = async () => {
        const orgID = await AsyncStorage.getItem("userID");
        setOrganizationID(orgID);
    }

    useEffect(() => {
        getOrgID();
        getOrganizationByID(organizationID)
            .then(res => {
                setOrgData(res.data.organization);
            }).catch(err => {
                console.log(err);
            })
    }, [organizationID])

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            updateOrganization(organizationID, orgData)
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

    // get string value of a number
    const getNumberString = (number) => {
        return number + "";
    }

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
                    }}>Update Organization</Text>
                </View>
            </SafeAreaView>
            <ScrollView style={{ paddingHorizontal: 20 }}>
                {orgData ? (
                    <>
                        <FormTextInput title="Organization Name" placeholder="Organization Name" required={true}
                            onChangeText={(value) => onChange("name", value)}
                            value={orgData.name} />
                        <Text style={ViewFundStyles.errorText}>{formErrors.name}</Text>

                        <FormTextInput title="Address" placeholder="Address" required={true}
                            onChangeText={(value) => onChange("address", value)}
                            value={orgData.address} />
                        <Text style={ViewFundStyles.errorText}>{formErrors.address}</Text>

                        <FormTextInput title="Country" placeholder="Country" required={true}
                            onChangeText={(value) => onChange("country", value)}
                            value={orgData.country} />
                        <Text style={ViewFundStyles.errorText}>{formErrors.country}</Text>

                        <FormTextInput title="ZIP Code" placeholder="ZIP Code" required={true}
                            onChangeText={(value) => onChange("zipCode", value)}
                            value={getNumberString(orgData.zipCode)} keyboardType='numeric' />
                        <Text style={ViewFundStyles.errorText}>{formErrors.zipCode}</Text>

                        <FormTextInput title="Contact Number" placeholder="Contact Number" required={true}
                            onChangeText={(value) => onChange("contactNumber", value)}
                            value={orgData.contactNumber} keyboardType='phone-pad' />
                        <Text style={ViewFundStyles.errorText}>{formErrors.contactNumber}</Text>

                        <FormTextInput title="Email" placeholder="Email" required={true}
                            onChangeText={(value) => onChange("email", value)}
                            value={orgData.email} keyboardType='email-address' />
                        <Text style={ViewFundStyles.errorText}>{formErrors.email}</Text>

                        <View style={{
                            height: 55,
                            marginVertical: 24,
                        }}>
                            <GradientButton text="Update" onPress={onUpdatePress} />
                        </View>
                    </>)
                    : <ActivityIndicator size="large" color="#13B156" />}
            </ScrollView>
        </View>
    );
};

export default UpdateOrganizationDetails;
