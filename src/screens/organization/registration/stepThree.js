import React, { useEffect, useState } from 'react'
import { Image, ScrollView, TouchableOpacity, View } from 'react-native'
import { RadioButton } from 'react-native-paper'
import ImageUpload from '../../../components/donator/ImageUpload'
import FormLable from '../../../components/organization/FormLable'
import FormSection from '../../../components/organization/FormSection'
import GradientButton from '../../../components/organization/GradientButton'
import VerticleSpace from '../../../components/organization/VerticleSpace'
import pickImage from '../../../utils/imageConverter'

function OrgRegStepThree({ navigation, route }) {
    const [orgData, setOrgData] = useState({})
    const [selectedImage, setSelectedImage] = useState(null);
    const [verificationMethod, setVerificationMethod] = useState('registrationCertificate')

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
            <ScrollView style={{ paddingHorizontal: 20 }}>
                <FormSection section="Verify Organization" />
                <View style={{
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <RadioButton
                        value="registrationCertificate"
                        color='#13B156'
                        status={verificationMethod === 'registrationCertificate' ? 'checked' : 'unchecked'}
                        onPress={() => { }}
                    />
                    <FormLable title="Upload registration certificate" />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        marginLeft: 24,
                    }}
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
                            source={{
                                uri: selectedImage,
                            }}
                        />
                    ) : (
                        <></>
                    )}
                </View>

                <VerticleSpace height={24} />

                <View style={{
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <RadioButton
                        value="registrationCertificate"
                        color='#13B156'
                        status={verificationMethod === 'contactAdmin' ? 'checked' : 'unchecked'}
                        onPress={() => { }}
                    />
                    <FormLable title="Contact Admin for Verification Process" />
                </View>

                <View style={{
                    height: 55,
                    marginVertical: 24,
                }}>
                    <GradientButton text="Next" onPress={onPress} />
                </View>
            </ScrollView>
        </View>
    )
}

export default OrgRegStepThree