import React from 'react'
import { Text } from 'react-native'

function FormSection({ section }) {
    return (
        <Text style={{
            fontSize: 17,
            fontWeight: 'bold',
            color: '#000000',
            paddingHorizontal: 20,
            paddingTop: 10,
        }}>{section}
        </Text>
    )
}

export default FormSection