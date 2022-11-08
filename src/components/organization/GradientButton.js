import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

function GradientButton({ text, onPress }) {
    return (
        <Pressable onPress={onPress}>
            <LinearGradient
                // Button Linear Gradient
                colors={['#32CB73', '#13B156']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: 100,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text style={{
                    color: "white",
                    fontSize: 18,
                    fontWeight: "600",
                }}>{text}</Text>
            </LinearGradient>
        </Pressable>
    )
}

export default GradientButton