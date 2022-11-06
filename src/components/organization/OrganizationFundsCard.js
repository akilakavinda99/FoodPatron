import React from 'react'
import { Image, Text, View } from 'react-native'
import { ProgressBar, Colors } from 'react-native-paper';

function OrganizationFundsCard({ title, image, target, donors, daysLeft, raised }) {
    return (
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
                <Text style={{
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
                    }}>Target: {target}</Text>

                <ProgressBar progress={0.5} color="#13B156" 
                style={{
                    marginTop: 10,
                    borderRadius: 10,
                }}/>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                }}>
                    <Text style={{
                        fontSize: 11,
                        fontWeight: "300",
                        color: "#09101D",
                    }}>{donors}</Text>

                    <Text style={{
                        fontSize: 11,
                        fontWeight: "300",
                        color: "#ff0000",
                    }}>{daysLeft}</Text>

                </View>
            </View>

        </View>
    )
}

export default OrganizationFundsCard