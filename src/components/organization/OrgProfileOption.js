import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import MIcon from 'react-native-vector-icons/MaterialIcons';

function OrgProfileOption({ title, icon, onPress }) {
    const navigation = useNavigation();

    return (
        <Pressable onPress={() => { navigation.navigate(onPress) }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: 10,
                paddingHorizontal: 10,

            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: '700',
                }}>{title}</Text>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#E8F8EF',
                    borderRadius: 50,
                    padding: 5,
                }}>
                    <MIcon name={icon} size={24} color="#13B156" />
                </View>
            </View>
        </Pressable>
    )
}

export default OrgProfileOption