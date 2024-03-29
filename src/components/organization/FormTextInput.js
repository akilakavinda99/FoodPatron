import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import FormLable from './FormLable'

function FormTextInput({ title, required, placeholder, icon, keyboardType, ...rest }) {

    return (
        <View style={{ paddingTop: 3 }}>
            <FormLable title={title} required={required} />
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
                keyboardType={keyboardType ? keyboardType : "default"}
                {...rest}
            />
        </View>
    )
}

export default FormTextInput