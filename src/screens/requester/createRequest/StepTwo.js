import React from 'react'
import { View,
         Text,
         ScrollView, 
         TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import FormTextInput from '../../../components/user/FormTextInput';
import GradientButton from '../../../components/user/Button'
import ImageUpload from '../../../components/donator/ImageUpload';
import FormLabel from '../../../components/user/FormLabel';

const StepTwo = () => {
    
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
                }}>Request Details</Text>

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
            <View style={{
                justifyContent: "space-between",
                paddingHorizontal: 20,
                paddingTop: 20,
            }}>

            <FormLabel title="Upload a Cover Image" />

            <TouchableOpacity>
                <ImageUpload />
            </TouchableOpacity>
            </View>


            <View style={{
                    height: 55,
                    paddingHorizontal: 20,
                    marginVertical: 24,
                }}>
                    <GradientButton text="Submit" />
            </View>

           </ScrollView>
           </View>
    )
}

export default StepTwo;
            