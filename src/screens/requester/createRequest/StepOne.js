import React from 'react'
import { View,
         Text,
         ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import FormTextInput from '../../../components/user/FormTextInput';
import GradientButton from '../../../components/user/Button'

const StepOne = () => {
    
    return (
        <View style={{
            backgroundColor: "white",
            height: "100%",
        }}>
            <ScrollView>

            <Text style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#56616F",
                    paddingHorizontal: 20,
                    paddingTop: 80,
                }}>Requester’s personal information</Text>

            <FormTextInput 
                title="First Name" 
                placeholder="First Name" 
                required={true} 
                />
            <FormTextInput 
                title="Last Name" 
                placeholder="Last Name" 
                required={true} 
                />
            <FormTextInput 
                title="Contact Number" 
                placeholder="Contact Number"
                required={true} 
                />

            <Text style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#56616F",
                    paddingHorizontal: 20,
                    paddingTop: 20,
                }}>Beneficiary's contact information</Text>


            <FormTextInput 
                title="Country"
                placeholder="Country"
                required={true} 
                />
            <FormTextInput 
                title="Zip Code"
                placeholder=" Zip Code"
                required={true} 
                />
            <FormTextInput 
                title="Address"
                placeholder="Address"
                required={true} 
                />
            <FormTextInput 
                title="Email Address"
                placeholder="Email Address"
                required={true} 
                />
            <FormTextInput 
                title="Telephone Number"
                placeholder="Telephone Number"
                required={true} 
                />

            <View style={{
                    height: 55,
                    paddingHorizontal: 20,
                    marginVertical: 24,
                }}>
                    <GradientButton text="Next" />
                </View>

            </ScrollView>
        </View>
    )
}
export default StepOne;