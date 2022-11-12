import React, { useState } from 'react'
import FormTextInput from '../../components/user/FormTextInput';
import GradientButton from '../../components/user/Button';
import FormCheckBox from '../../components/user/FormCheckBox';
import { 
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native'
import { Checkbox } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const SignUp = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(false);

    return (
        <View style={{
            backgroundColor: "white",
            height: "100%",
        }}>
            <ScrollView>

                    <Image
                        style={{
                            height: 120,
                            width: 190,
                            alignSelf: "center",
                            marginTop: 60,

                        }}
                        resizeMode="cover"
                        source={require('../../../assets/signup.png')}
                    />

            <Text style={{
                fontSize: 25,
                fontWeight: "bold",
                color: "#56616F",
                paddingHorizontal: 20,
                paddingTop: 20,
                textAlign: "center",
            }}>Sign up for free</Text>

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
                title="Email Address" 
                placeholder="Email Address" 
                required={true} 
                />     
            <FormTextInput 
                title="Telephone" 
                placeholder="Telephone"
                required={true} 
                />     
            <FormTextInput 
                title="Password" 
                placeholder="Password" 
                secureTextEntry={true}
                required={true} 
                />     

            <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            // justifyContent: "space-between",
                            paddingHorizontal: 20,
                            paddingTop: 10,
                        }}>
                        <Checkbox
                            color="#13B156"
                            uncheckedColor="#13B156"
                            // title="Remember me"
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => setChecked(!checked)}
                        />
                        <Text style={{
                            color: "#000000",
                            fontSize: 15,
                            fontWeight: "bold",
                        }}>I agree with Terms and Conditions and Privacy Policies.</Text>
                    </View>
          
                <View style={{
                        height: 55,
                        paddingHorizontal: 20,
                        marginVertical: 24,
                    }}>

                    <GradientButton text="Sign up" onPress={() => navigation.navigate("signInIn")}/>
                </View>
            

            <View style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 10,
            }}>
                <Text style={{
                    fontSize: 16,
                    color: "#56616F",
                }}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("signInIn")}>
                <Text style={{
                    fontSize: 16,
                    color: "#13B156",
                    fontWeight: "bold",
                    paddingHorizontal: 5,
                }}>Sign in</Text>   
                </TouchableOpacity>

            </View>
            
            </ScrollView>
        </View>
    )
}

export default SignUp;