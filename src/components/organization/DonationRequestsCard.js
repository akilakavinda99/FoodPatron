import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'

function DonationRequestsCard({ title, image, description, fname, lname, email, userId, address, country, tel }) {
    const navigation = useNavigation();

    return (
        <Pressable onPress={() => {
            navigation.navigate('viewRequestByOrg', {
                title: title,
                image: image,
                description: description,
                fname: fname,
                lname: lname,
                email: email,
                userId: userId,
                address: address,
                country: country,
                tel: tel,
            })
        }}>
            <View style={{
                backgroundColor: "#fff",
                borderRadius: 10,
                margin: 5,
                marginVertical: 10,
                marginHorizontal: 20,
                flexDirection: 'row',
                height: 140,
                elevation: 5,
                borderColor: "#E8E8E8",
            }}>
                <Image
                    style={{
                        flex: 1,
                        height: 140,
                        borderRadius: 10,
                    }}
                    resizeMode="cover"
                    source={{
                        uri: image,
                    }}
                />
                <View style={{
                    flex: 2,
                    flexDirection: 'column',
                    paddingHorizontal: 10,
                    paddingTop: 5,
                }}>
                    <Text numberOfLines={1}
                        style={{
                            fontSize: 18,
                            marginBottom: 8,
                            fontWeight: "600",
                        }}>{title}</Text>

                    <Text
                        numberOfLines={3}
                        style={{
                            fontSize: 13,
                            fontWeight: "300",
                            color: "#09101D",
                            textAlign: 'justify',
                            marginBottom: 16,
                        }}>{description}</Text>

                    <Text
                        numberOfLines={1}
                        style={{
                            fontSize: 11,
                            fontWeight: "300",
                            color: "#09101D",
                            textAlign: 'justify'
                        }}>{address}</Text>

                    <Text
                        numberOfLines={1}
                        style={{
                            fontSize: 11,
                            fontWeight: "300",
                            color: "#09101D",
                            textAlign: 'justify'
                        }}>{country}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default DonationRequestsCard