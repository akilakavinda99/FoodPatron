import React from 'react'
import { Image, Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import FAcon from 'react-native-vector-icons/Feather';
import Micon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import VerticleSpace from '../../components/organization/VerticleSpace';
import ViewFundStyles from '../fund/styles/ViewFundStyles';
import HorizontalLine from '../../components/organization/HorizontalLine';

function ViewRequestByOrganization({ navigation, route }) {
    const { title, image, description, fname, lname, email, userId, address, country, tel } = route.params;

    const onPressEmail = () => Linking.openURL(`mailto:${email}?subject=${title}`)
    const onPressPhone = () => Linking.openURL(`tel:${tel}`)
    return (
        <SafeAreaProvider style={{
            flex: 1,
            backgroundColor: '#fff'
        }}>
            {/* Heading */}
            <SafeAreaView style={ViewFundStyles.body}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <Pressable onPress={() => { navigation.goBack() }}>
                        <FAcon name='arrow-left' color='#13B156' size={24} />
                    </Pressable>
                </View>
            </SafeAreaView>

            <ScrollView>
                {/* Fund image */}
                <View style={ViewFundStyles.fundImage}>
                    <Image
                        style={{
                            height: 185,
                            borderRadius: 10,
                        }}
                        resizeMode="cover"
                        source={{
                            uri: image,
                        }}
                    />
                </View>

                {/* Fund details */}
                <View style={{
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                }}>
                    <Text style={ViewFundStyles.fundTitle}>{title}</Text>

                    <HorizontalLine />
                    <VerticleSpace height={10} />

                    <View>
                        <Text style={ViewFundStyles.section}>Description</Text>
                        <Text style={ViewFundStyles.description}>{description}</Text>

                        <VerticleSpace height={10} />

                        <Text style={ViewFundStyles.section}>Address</Text>
                        <Text style={ViewFundStyles.description}>{address}</Text>
                        <Text style={ViewFundStyles.description}>{country}</Text>
                    </View>

                    <VerticleSpace height={10} />
                    <HorizontalLine />
                    <VerticleSpace height={10} />

                    <Text style={ViewFundStyles.section}>Organizer</Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginVertical: 10,
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <Micon name='person' color='#56616F' size={24} />
                            <Text style={{
                                fontSize: 16,
                                fontWeight: "500",
                                marginLeft: 10,
                            }}>{fname} {lname}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <Pressable onPress={onPressEmail}>
                                <Micon name='email' color='#56616F' size={24} />
                            </Pressable>
                            <Pressable onPress={onPressPhone}>
                                <Micon name='call' color='#56616F' size={24} style={{ marginLeft: 24 }} />
                            </Pressable>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaProvider>
    )
}

export default ViewRequestByOrganization