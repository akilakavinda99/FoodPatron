import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import ImageUpload from '../../components/donator/ImageUpload'
import FormDatePicker from '../../components/organization/FormDatePicker'
import FormLable from '../../components/organization/FormLable'
import FormSection from '../../components/organization/FormSection'
import FormTextInput from '../../components/organization/FormTextInput'
import GradientButton from '../../components/organization/GradientButton'
import VerticleSpace from '../../components/organization/VerticleSpace'
import pickImage from '../../utils/imageConverter'
import ViewFundStyles from './styles/ViewFundStyles'
import { FundFormValidation } from '../../components/organization/FundFormValidation'
import { getFundByID, newFund, updateFund } from '../../api/fund.api'
import { SafeAreaView } from 'react-native-safe-area-context'
import FAcon from 'react-native-vector-icons/Feather';
import { getRemainingTime } from '../../utils/getRemainingTime'
import AsyncStorage from '@react-native-async-storage/async-storage'

function EditFund({ route }) {
    // const organizationID = "6336ad5ea9f14b49dbf42f8c"; // for testing
    // const organizationID = AsyncStorage.getItem("userID")
    const fundID = route.params.fundID;
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const [selectedImage, setSelectedImage] = useState(null);
    const [fundData, setFundData] = useState({})
    const [formErrors, setFormErrors] = useState({})
    const [loading, setLoading] = useState(true)
    const [numberOfDonors, setNumberOfDonors] = useState(0)
    const [organizationID, setOrganizationID] = useState("");

    const [isSubmitting, setIsSubmitting] = useState(false)

    const onChange = (name, value) => {
        setFundData({ ...fundData, [name]: value })
    }

    const onSubmitPress = () => {
        setFormErrors(FundFormValidation(fundData))
        setIsSubmitting(true)
    }
    const pickImageFromGallery = () => {
        pickImage().then((res) => {
            setSelectedImage(res);
            fundData.imageIsUpdated = true;
            onChange("fundImage", res);
        });
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            setFundData({ ...fundData, ['organizationID']: organizationID })
            fundData.endingDate = new Date(fundData.endingDate);

            updateFund(fundID, fundData).then(res => {
                navigation.navigate("viewFundByOrg", {
                    fundID: fundData._id,
                    title: fundData.title,
                    image: fundData.fundImage,
                    target: fundData.target,
                    donors: numberOfDonors + " donor(s)",
                    daysLeft: getRemainingTime(fundData.endingDate),
                    raised: fundData.currentAmount,
                    budget: fundData.budget,
                    description: fundData.description,
                    status: fundData.status
                })
            }).catch(err => {
                console.log(err);
            })
            setIsSubmitting(false)
        } else {
            setIsSubmitting(false)
        }
    }, [formErrors, isSubmitting])

    const getFundDetails = async () => {
        getFundByID(fundID).then(res => {
            setFundData(res.data.fund)
            setNumberOfDonors(res.data.numOfDonations)
            setSelectedImage(res.data.fund.fundImage)
            setLoading(false)
        }).catch(err => {
            console.log(err);
        })
    }

    // get string value of a number
    const getNumberString = (number) => {
        return number + "";
    }

    const getOrgID = async () => {
        const orgID = await AsyncStorage.getItem("userID");
        setOrganizationID(orgID);
    }

    useEffect(() => {
        setFundData({})
        setFormErrors({})
        setIsSubmitting(false)
        setSelectedImage(null);
        if (isFocused) {
            getOrgID();
            getFundDetails()
        }
    }, [isFocused])

    return (
        isFocused ? (
            <View style={{
                backgroundColor: "white",
                height: "100%",
            }}>
                {loading ? (
                    <ActivityIndicator size="large"  color="#13B156" />
                ) : (
                    <>
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
                                }}>Update Fund</Text>
                            </View>
                        </SafeAreaView>

                        <ScrollView style={{ paddingHorizontal: 20 }}>
                            <FormTextInput title="Title" placeholder="Title" required={true}
                                onChangeText={(value) => onChange("title", value)} value={fundData.title} />
                            <Text style={ViewFundStyles.errorText}>{formErrors.title}</Text>

                            <FormTextInput title="Target of the fund" placeholder="Target of the fund" required={true}
                                onChangeText={(value) => onChange("target", value)} value={fundData.target} />
                            <Text style={ViewFundStyles.errorText}>{formErrors.target}</Text>

                            <FormTextInput title="Description" placeholder="Description" required={true}
                                onChangeText={(value) => onChange("description", value)} value={fundData.description} />
                            <Text style={ViewFundStyles.errorText}>{formErrors.description}</Text>

                            {/* Ending Date with a Date picker */}
                            <View style={{ paddingTop: 10 }}>
                                <FormLable title="Ending Date" required={true} />
                                <FormDatePicker onChangeDate={(value) => onChange("endingDate", value)}
                                    minDate={new Date()} value={fundData.endingDate} />
                                <Text style={ViewFundStyles.errorText}>{formErrors.endingDate}</Text>
                            </View>

                            <FormTextInput title="Donation Required" placeholder="Rs. 9999.00" keyboardType='numeric'
                                required={true} onChangeText={(value) => onChange("budget", value)} value={getNumberString(fundData.budget)} />
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
                            <FormTextInput title="Email" placeholder="Email" required={true}
                                keyboardType='email-address' value={fundData.contactEmail}
                                onChangeText={(value) => onChange("contactEmail", value)} />
                            <Text style={ViewFundStyles.errorText}>{formErrors.contactEmail}</Text>

                            <FormTextInput title="Contact Number" placeholder="Contact Number"
                                required={true} keyboardType='phone-pad' value={fundData.contactNumber}
                                onChangeText={(value) => onChange("contactNumber", value)} />
                            <Text style={ViewFundStyles.errorText}>{formErrors.contactNumber}</Text>


                            <View style={{
                                height: 55,
                                marginVertical: 24,
                            }}>
                                <GradientButton text="Update" onPress={onSubmitPress} />
                            </View>
                        </ScrollView>
                    </>
                )}
            </View>
        ) : (
            <Text>Not focused</Text>
        )
    )
}

export default EditFund