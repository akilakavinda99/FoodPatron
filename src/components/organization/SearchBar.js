import React from 'react'
import { TextInput } from 'react-native-paper';
import FAcon from 'react-native-vector-icons/FontAwesome';

function CustomeSearchBar() {
    return (
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
                marginHorizontal: 20,
                height: 40,
            }}
            placeholder="Search"
            placeholderTextColor="#ADB2B6"
            right={
                <TextInput.Icon
                    icon="magnify"
                    color="#ADB2B6"
                    style={{
                        paddingTop: 10,
                    }}
                />
            }
        />
    )
}

export default CustomeSearchBar