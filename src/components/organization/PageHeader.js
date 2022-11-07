import React from 'react'
import FAcon from 'react-native-vector-icons/FontAwesome';
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';


function PageHeader({ title, icon }) {
    return (
        <SafeAreaView style={{
            backgroundColor: "#fff",
            paddingLeft: 20,
            paddingVertical: 10,
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <FAcon name={icon} color='#13B156' size={24} />
                <Text style={{
                    fontSize: 24,
                    marginLeft: 20,
                    fontWeight: "500",
                }}>{title}</Text>
            </View>
        </SafeAreaView>
    )
}

export default PageHeader