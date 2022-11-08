import React from 'react'
import { Text, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import FormLabel from './FormLabel'

function FormTextInput({ title, required, placeholder, icon, ...rest }) {
    
        return (
            <View style={{ 
                paddingTop: 10,
                paddingHorizontal: 20,
             }}>
                <FormLabel title={title} required={required} />
                <TextInput
                    mode="outlined"
                    activeOutlineColor="#56616F"
                    outlineColor="#DADEE3"
                    theme={{
                        roundness: 100,
                        colors: { text: '#56616F' }
                    }}
                    style={{
                        backgroundColor: "white",
                        color: "red",
                        paddingHorizontal: 10,
                    }}
                    placeholder={placeholder}
                    placeholderTextColor="#ADB2B6"
                    right={
                        <TextInput.Icon
                            icon={icon}
                            color="#ADB2B6"
                        />
                    }
                    {...rest}
                />
            </View>
        )
    }

export default FormTextInput;