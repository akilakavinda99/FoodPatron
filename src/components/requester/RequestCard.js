import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from '../../screens/requester/styles/ViewRequestStyles'

export default function RequestCard() {
  return (
    <TouchableOpacity 
        style={styles.mainView}
        // onPress={() => navigation.navigate("donationView", { donationId: donationId })}
        >
    
    <View style={styles.mainRow}>
        <Image
            style={styles.image}
            // resizeMode="cover"
            source={require('../../../assets/test.png')}
        />

    </View>

    </TouchableOpacity>
  )
}