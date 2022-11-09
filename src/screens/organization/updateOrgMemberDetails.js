import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Pressable, ScrollView, Text, View } from 'react-native'
import FormSection from '../../components/organization/FormSection';
import FormTextInput from '../../components/organization/FormTextInput'
import GradientButton from '../../components/organization/GradientButton';
import VerticleSpace from '../../components/organization/VerticleSpace';
import { getOrganizationByID, updateOrganizationBoard } from '../../api/organization.api';
import { SafeAreaView } from 'react-native-safe-area-context';
import FAcon from 'react-native-vector-icons/Feather';
import ViewFundStyles from '../fund/styles/ViewFundStyles'
import { OrgMemberUpdateValidation } from '../../components/organization/OrgFormValidation';
import AsyncStorage from '@react-native-async-storage/async-storage';

function UpdateOrgMemberDetails({ navigation, route }) {
    // const organizationID = "6336ad5ea9f14b49dbf42f8c"; // for testing
    const [orgData, setOrgData] = useState(null)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [organizationID, setOrganizationID] = useState("");

    const onChange = (name, value) => {
        setOrgData({ ...orgData, [name]: value })
    }

    const onUpdatePress = () => {
        setFormErrors(OrgMemberUpdateValidation(orgData))
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
            updateOrganizationBoard(organizationID, orgData)
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
                    }}>Update Organization</Text>
                </View>
            </SafeAreaView>
            <ScrollView style={{ paddingHorizontal: 20 }}>
                {orgData ? (
                    <>
                        <FormSection section="President's Details" />
                        <FormTextInput title="Name" placeholder="President's name" required={true}
                            onChangeText={(value) => onChange("presidentName", value)}
                            value={orgData.presidentName} />
                        <Text style={ViewFundStyles.errorText}>{formErrors.presidentName}</Text>

                        <FormTextInput title="Email" placeholder="President's email" required={true}
                            onChangeText={(value) => onChange("presidentEmail", value)}
                            value={orgData.presidentEmail} />
                        <Text style={ViewFundStyles.errorText}>{formErrors.presidentEmail}</Text>

                        <FormTextInput title="Mobile Number" placeholder="President's mobile number" required={true}
                            onChangeText={(value) => onChange("presidentContactNumber", value)}
                            value={orgData.presidentContactNumber} />
                        <Text style={ViewFundStyles.errorText}>{formErrors.presidentContactNumber}</Text>

                        <VerticleSpace height={24} />

                        <FormSection section="Secretary's Details" />
                        <FormTextInput title="Name" placeholder="Secretary's name" required={true}
                            onChangeText={(value) => onChange("secretaryName", value)}
                            value={orgData.secretaryName} />
                        <Text style={ViewFundStyles.errorText}>{formErrors.secretaryName}</Text>

                        <FormTextInput title="Email" placeholder="Secretary's email" required={true}
                            onChangeText={(value) => onChange("secretaryEmail", value)}
                            value={orgData.secretaryEmail} />
                        <Text style={ViewFundStyles.errorText}>{formErrors.secretaryEmail}</Text>

                        <FormTextInput title="Mobile Number" placeholder="Secretary's mobile number" required={true}
                            onChangeText={(value) => onChange("secretaryContactNumber", value)}
                            value={orgData.secretaryContactNumber} />
                        <Text style={ViewFundStyles.errorText}>{formErrors.secretaryContactNumber}</Text>

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
}

export default UpdateOrgMemberDetails