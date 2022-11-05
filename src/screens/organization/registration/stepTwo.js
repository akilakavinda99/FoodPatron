import React from 'react'
import { ScrollView, View } from 'react-native'
import FormTextInput from '../../../components/organization/FormTextInput'

function stepTwo({ navigation, route }) {
    console.log(route.params);
    const [orgData, setOrgData] = useState({})

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
                <FormTextInput title="Organization Name" placeholder="Organization Name" required={true} onChangeText={(value) => onChange("organizationName", value)} />
                <FormTextInput title="Address" placeholder="Address" required={true} />
                <FormTextInput title="Country" placeholder="Country" required={true} />
                <FormTextInput title="ZIP Code" placeholder="ZIP Code" required={true} />
                <FormTextInput title="Contact Number" placeholder="Contact Number" required={true} />
                <FormTextInput title="Email" placeholder="Email" required={true} />
                <FormTextInput title="Registration No." placeholder="Registration Number" required={true} />

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

export default stepTwo