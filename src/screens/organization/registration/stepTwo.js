import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import FormSection from '../../../components/organization/FormSection';
import FormTextInput from '../../../components/organization/FormTextInput'
import GradientButton from '../../../components/organization/GradientButton';
import VerticleSpace from '../../../components/organization/VerticleSpace';

function OrgRegStepTwo({ navigation, route }) {
    const [orgData, setOrgData] = useState({})

    useEffect(() => {
        setOrgData(route.params.orgData)
    }, [])

    const onChange = (name, value) => {
        setOrgData({ ...orgData, [name]: value })
    }

    const onPress = () => {
        console.log(orgData);
        navigation.navigate("OrgRegStepTwo", { orgData: orgData })
    }

    return (
        <View style={{
            backgroundColor: "white",
            height: "100%",
        }}>
            <ScrollView style={{ paddingHorizontal: 20 }}>
                <FormSection section="President's Details" />
                <FormTextInput title="Name" placeholder="President's name" required={true} onChangeText={(value) => onChange("organizationName", value)} />
                <FormTextInput title="Email" placeholder="President's email" required={true} />
                <FormTextInput title="Mobile Number" placeholder="President's mobile number" required={true} />

                <VerticleSpace height={24} />

                <FormSection section="Secretary's Details" />
                <FormTextInput title="Name" placeholder="Secretary's's name" required={true} onChangeText={(value) => onChange("organizationName", value)} />
                <FormTextInput title="Email" placeholder="Secretary's's email" required={true} />
                <FormTextInput title="Mobile Number" placeholder="Secretary's's mobile number" required={true} />

                <View style={{
                    height: 55,
                    marginVertical: 24,
                }}>
                    <GradientButton text="Next" onPress={onPress} />
                </View>
            </ScrollView>
        </View>
    );
}

export default OrgRegStepTwo