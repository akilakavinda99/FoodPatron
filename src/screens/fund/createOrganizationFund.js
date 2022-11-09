import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import ImageUpload from '../../components/donator/ImageUpload'
import FormDatePicker from '../../components/organization/FormDatePicker'
import FormLable from '../../components/organization/FormLable'
import FormSection from '../../components/organization/FormSection'
import FormTextInput from '../../components/organization/FormTextInput'
import GradientButton from '../../components/organization/GradientButton'
import PageHeader from '../../components/organization/PageHeader'
import VerticleSpace from '../../components/organization/VerticleSpace'
import pickImage from '../../utils/imageConverter'
import ViewFundStyles from './styles/ViewFundStyles'
import { FundFormValidation } from '../../components/organization/FundFormValidation'
import { newFund } from '../../api/fund.api'
import AsyncStorage from '@react-native-async-storage/async-storage'

function CreateOrganizationFund() {
    // const organizationID = "6336ad5ea9f14b49dbf42f8c"; // for testing
    // const organizationID = AsyncStorage.getItem("userID")
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const [selectedImage, setSelectedImage] = useState(null);
    const [fundData, setFundData] = useState({})
    const [formErrors, setFormErrors] = useState({})
    const [organizationID, setOrganizationID] = useState("");
    const [loading, setLoading] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false)

    const onChange = (name, value) => {
        setFundData({ ...fundData, [name]: value })
    }

    const getOrgID = async () => {
        const orgID = await AsyncStorage.getItem("userID");
        setOrganizationID(orgID);
    }

    const onSubmitPress = () => {
        setLoading(true);
        setFormErrors(FundFormValidation(fundData))
        setIsSubmitting(true)
    }
    const pickImageFromGallery = () => {
        pickImage().then((res) => {
            setSelectedImage(res);
            onChange("fundImage", res);
        });
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            setFundData({ ...fundData, ['organizationID']: organizationID })
            fundData.endingDate = new Date(fundData.endingDate);

            newFund(fundData).then(res => {
                navigation.navigate("OrgFunds")
            }).catch(err => {
                console.log(err);
            })
            setLoading(false);
            setIsSubmitting(false)
        } else {
            setLoading(false);
            setIsSubmitting(false)
        }
    }, [formErrors, isSubmitting])

    useEffect(() => {
        getOrgID();
        setFundData({})
        setFormErrors({})
        setIsSubmitting(false)
        setSelectedImage(null);
        setLoading(false);
    }, [isFocused])

    return (
        isFocused ? (
            <View style={{
                backgroundColor: "white",
                height: "100%",
            }}>
                <PageHeader title="Create new fund" icon="plus-circle" />
                <ScrollView style={{ paddingHorizontal: 20 }}>
                    <FormTextInput title="Title" placeholder="Title" required={true} onChangeText={(value) => onChange("title", value)} />
                    <Text style={ViewFundStyles.errorText}>{formErrors.title}</Text>

                    <FormTextInput title="Target of the fund" placeholder="Target of the fund" required={true} onChangeText={(value) => onChange("target", value)} />
                    <Text style={ViewFundStyles.errorText}>{formErrors.target}</Text>

                    <FormTextInput title="Description" placeholder="Description" required={true} onChangeText={(value) => onChange("description", value)} />
                    <Text style={ViewFundStyles.errorText}>{formErrors.description}</Text>

                    {/* Ending Date with a Date picker */}
                    <View style={{ paddingTop: 10 }}>
                        <FormLable title="Ending Date" required={true} />
                        <FormDatePicker onChangeDate={(value) => onChange("endingDate", value)} minDate={new Date()} />
                        <Text style={ViewFundStyles.errorText}>{formErrors.endingDate}</Text>
                    </View>

                    <FormTextInput title="Donation Required" placeholder="Rs. 9999.00" keyboardType='numeric' required={true} onChangeText={(value) => onChange("budget", value)} />
                    <Text style={ViewFundStyles.errorText}>{formErrors.budget}</Text>

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
                    <Text style={ViewFundStyles.errorText}>{formErrors.fundImage}</Text>

                    <VerticleSpace height={24} />

                    <FormSection section="Contact Information" />
                    <FormTextInput title="Email" placeholder="Email" required={true} keyboardType='email-address' onChangeText={(value) => onChange("contactEmail", value)} />
                    <Text style={ViewFundStyles.errorText}>{formErrors.contactEmail}</Text>

                    <FormTextInput title="Contact Number" placeholder="Contact Number" required={true} keyboardType='phone-pad' onChangeText={(value) => onChange("contactNumber", value)} />
                    <Text style={ViewFundStyles.errorText}>{formErrors.contactNumber}</Text>


                    <View style={{
                        height: 55,
                        marginVertical: 24,
                    }}>
                        {loading ?
                            <ActivityIndicator size="large" color="#13B156" /> :
                            <GradientButton text="Create Fund" onPress={onSubmitPress} />
                        }
                    </View>
                </ScrollView>
            </View>
        ) : (
            <Text>Not focused</Text>
        )
    )
}

export default CreateOrganizationFund