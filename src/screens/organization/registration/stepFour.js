import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Checkbox } from 'react-native-paper'
import FormSection from '../../../components/organization/FormSection'
import FormTextInput from '../../../components/organization/FormTextInput'
import GradientButton from '../../../components/organization/GradientButton'

function OrgRegStepFour({ navigation, route }) {
    const [orgData, setOrgData] = useState({})
    const [termsAndConditions, setTermsAndConditions] = useState(false)

    useEffect(() => {
        setOrgData(route.params.orgData)
    }, [])

    const onChange = (name, value) => {
        setOrgData({ ...orgData, [name]: value })
    }

    const onPress = () => {
        console.log(orgData);
        navigation.navigate("OrgRegStepFour", { orgData: orgData })
    }

    return (
        <View style={{
            backgroundColor: "white",
            height: "100%",
        }}>
            <ScrollView style={{ paddingHorizontal: 20 }}>
                <FormSection section="Security" />
                <FormTextInput title="Password" placeholder="********" required={true} onChangeText={(value) => onChange("organizationName", value)} />
                <FormTextInput title="Re-type Password" placeholder="********" required={true} />

                {/* Terms and conditions checkbox */}
                <View style={{ flexDirection: "row" }}  >
                    <View style={{ marginLeft: 14, marginTop: 24 }}>
                        <Checkbox
                            color="#13B156"
                            status={termsAndConditions ? "checked" : "unchecked"}
                            onPress={() => {
                                setTermsAndConditions(!termsAndConditions);
                            }} />
                    </View>
                    <Text style={{ marginTop: 28, marginLeft: 10 }}>
                        I agree with Terms and Conditions and Privacy Policy
                    </Text>
                </View>

                <View style={{ height: 55, marginVertical: 24 }}>
                    <GradientButton text="Submit" onPress={onPress} />
                </View>
            </ScrollView>
        </View>
    )
}

export default OrgRegStepFour