import React from 'react'
import { Text } from 'react-native'

export default function FormLabel({ title, required }) {
  return (
    
      <Text style={{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#56616F',
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 8,
      }}>{title}
        {required && <Text style={{ color: "red" }}> *</Text>}
      </Text>
    
  )
}