import React, { useEffect, useState } from 'react'
import FormTextInput from '../../components/user/FormTextInput';
import GradientButton from '../../components/user/Button';
// import FormCheckBox from '../../components/user/FormCheckBox';
import { Checkbox } from "react-native-paper";

import {
    Text,
    View,
    Image,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native'
import { userSignIn } from '../../api/user.api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState("");
    const [logedUserID, setLogedUserID] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // set timer to 2 seconds
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, [])

    const onSignIn = () => {
        setError("");
        userSignIn({ email, password })
            .then((res) => {
                let userRole = res.data.roles
                AsyncStorage.setItem("userEmail", email);
                AsyncStorage.setItem("userRole", userRole);
                AsyncStorage.setItem("userID", res.data.userID);
                AsyncStorage.setItem("userToken", res.data.accessToken);

                try {
                    if (userRole === "1984") {
                        navigation.replace("userHomeIn");
                    } else if (userRole === "5150") {
                        navigation.replace("OrgHomeIn");
                    } else if (userRole === "2001") {
                        navigation.replace("AdminHomeIn");
                    }
                } catch (error) {
                    console.log(error);
                }

            }).catch((error) => {
                setError(error.response.data.message);
            })
    }

    return (
        <View style={{
            backgroundColor: "white",
            height: "100%",
        }}>
            {loading ? <ActivityIndicator size="large" color="#13B156" /> : (
                <>
                    <Image
                        style={{
                            height: 120,
                            width: 120,
                            alignSelf: "center",
                            marginTop: 60,

                        }}
                        resizeMode="cover"
                        source={require('../../../assets/signin.png')}
                    />
                    <Text style={{
                        fontSize: 25,
                        fontWeight: "bold",
                        color: "#56616F",
                        paddingHorizontal: 20,
                        paddingTop: 20,
                        textAlign: "center",
                    }}>Sign in to your account</Text>

                    <FormTextInput
                        title="Email Address"
                        placeholder="Email Address"
                        keyboardType='email-address'
                        onChangeText={(text) => setEmail(text)} />

                    <FormTextInput
                        title="Password"
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)} />

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
                        }}>Remember me</Text>
                    </View>

                    <View style={{
                        paddingHorizontal: 20,
                        paddingTop: 10,
                        alignItems: "center",
                    }}>
                        <Text style={{
                            color: "#FF0000",
                            fontSize: 15,
                            fontWeight: "bold",
                        }}>{error}</Text>
                    </View>

                    <View style={{
                        height: 55,
                        paddingHorizontal: 20,
                        marginVertical: 24,
                    }}>
                        <GradientButton text="Sign in" onPress={() => onSignIn()} />
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
                        <TouchableOpacity onPress={() => navigation.navigate("signup")}>
                            <Text style={{
                                fontSize: 15,
                                color: "#13B156",
                                fontWeight: "bold",
                                paddingHorizontal: 5,
                            }}>Sign up</Text>
                        </TouchableOpacity>

                    </View>
                </>)}

        </View>


    )
};

export default SignIn;