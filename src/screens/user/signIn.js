import React, { useState } from 'react'
import FormTextInput from '../../components/user/FormTextInput';
import GradientButton from '../../components/user/Button';
import FormCheckBox from '../../components/user/FormCheckBox';
import { 
    Text,
    View
} from 'react-native'


const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(false);
    
    return (
        <View style={{
            backgroundColor: "white",
            height: "100%",
        }}>
            <Text style={{
                fontSize: 25,
                fontWeight: "bold",
                color: "#56616F",
                paddingHorizontal: 20,
                paddingTop: 80,
                textAlign: "center",
            }}>Sign in to your account</Text>

            <FormTextInput 
                title="Email Address" 
                placeholder="Email Address" 
                required={true} 
                />
                
            <FormTextInput 
                title="Password" 
                placeholder="Password" 
                required={true} 
                />     

            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 20,
                    paddingTop: 10,
                }}
            >
                <FormCheckBox
                    title="Remember me"
                    // checked={checked}
                    // onPress={() => setChecked(!checked)}
                />
            </View>

            <View style={{
                    height: 55,
                    paddingHorizontal: 20,
                    marginVertical: 24,
                }}>

                <GradientButton text="Sign in" />
            </View>

            <View style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Text style={{
                    fontSize: 16,
                    color: "#13B156",
                    fontWeight: "bold",
                }}>Forgot Password?</Text>
                
            </View>

            <View style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 10,
            }}>
                <Text style={{
                    fontSize: 15,
                    color: "#56616F",
                }}>Don't have an account?</Text>
                <Text style={{
                    fontSize: 15,
                    color: "#13B156",
                    fontWeight: "bold",
                    paddingHorizontal: 5,
                }}>Sign up</Text>

            </View>

        </View>

        
    )
};

export default SignIn;