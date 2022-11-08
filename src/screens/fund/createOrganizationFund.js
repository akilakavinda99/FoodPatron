import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, ScrollView, TouchableOpacity, View } from 'react-native'
import ImageUpload from '../../components/donator/ImageUpload'
import FormDatePicker from '../../components/organization/FormDatePicker'
import FormLable from '../../components/organization/FormLable'
import FormSection from '../../components/organization/FormSection'
import FormTextInput from '../../components/organization/FormTextInput'
import GradientButton from '../../components/organization/GradientButton'
import PageHeader from '../../components/organization/PageHeader'
import VerticleSpace from '../../components/organization/VerticleSpace'
import pickImage from '../../utils/imageConverter'

function CreateOrganizationFund() {
    const navigation = useNavigation();
    const [selectedImage, setSelectedImage] = useState(null);

    const [fundData, setFundData] = useState({})

    const onChange = (name, value) => {
        setFundData({ ...fundData, [name]: value })
    }

    const onPress = () => {
        console.log(orgData);
        navigation.navigate("OrgRegStepTwo", { orgData: orgData })
    }
    const pickImageFromGallery = () => {
        pickImage().then((res) => {
            setSelectedImage(res);
            //  console.log(res);
        });
    };

    return (
        <View style={{
            backgroundColor: "white",
            height: "100%",
        }}>
            <PageHeader title="Create new fund" icon="plus-circle" />
            <ScrollView style={{ paddingHorizontal: 20 }}>
                <FormTextInput title="Title" placeholder="Title" required={true} onChangeText={(value) => onChange("organizationName", value)} />
                <FormTextInput title="Target of the fund" placeholder="Target of the fund" required={true} />
                <FormTextInput title="Description" placeholder="Description" required={true} />

                {/* Ending Date with a Date picker */}
                <View style={{ paddingTop: 10 }}>
                    <FormLable title="Ending Date" required={true} />
                    <FormDatePicker onChangeDate={(value) => console.log(value)} minDate={new Date()} />
                </View>

                <FormTextInput title="Donation Required" placeholder="Rs. 9999.00" required={true} />

                {/* Upload fund image */}
                <FormLable title="Fund image" required={true} />
                <View
                    style={{ flexDirection: "row" }}
                >
                    <TouchableOpacity onPress={pickImageFromGallery}>
                        <ImageUpload />
                    </TouchableOpacity>
                    {selectedImage != null && selectedImage != undefined ? (
                        <Image
                            style={{
                                width: 110,
                                height: 98,
                                marginLeft: 24,
                                marginTop: 13,
                            }}
                            source={{ uri: selectedImage }}
                        />
                    ) : (
                        <></>
                    )}
                </View>

                <VerticleSpace height={24} />

                <FormSection section="Contact Information" />
                <FormTextInput title="Email" placeholder="Email" required={true} />
                <FormTextInput title="Contact Number" placeholder="Contact Number" required={true} />


                <View style={{
                    height: 55,
                    marginVertical: 24,
                }}>
                    <GradientButton text="Create Fund" onPress={onPress} />
                </View>
            </ScrollView>
        </View>
    )
}

export default CreateOrganizationFund