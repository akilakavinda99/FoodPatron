import React from 'react'
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import FAcon from 'react-native-vector-icons/Feather';
import Micon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import VerticleSpace from '../../components/organization/VerticleSpace';
import { ProgressBar } from 'react-native-paper';
import ViewFundStyles from './styles/ViewFundStyles';
import HorizontalLine from '../../components/organization/HorizontalLine';

function ViewFundByOrganization({ navigation, route }) {
    const { title, image, target, donors, daysLeft, raised, budget, description } = route.params;

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
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Pressable onPress={() => { navigation.navigate('editFund') }}
                            style={{
                                marginRight: 20,
                            }}>
                            <FAcon name='edit' color='#13B156' size={24} />
                        </Pressable>
                        <Pressable onPress={() => { navigation.navigate('deleteFund') }}>
                            <FAcon name='trash' color='#FF395E' size={24} />
                        </Pressable>
                    </View>
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

                    <View style={{
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'space-between',
                    }}>
                        <Text style={ViewFundStyles.label}>Target</Text>
                        <Text style={ViewFundStyles.text}>{target}</Text>

                    </View>
                    <VerticleSpace height={10} />
                    <View style={{
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'space-between',
                    }}>
                        <Text style={ViewFundStyles.label}>Budget</Text>
                        <Text style={ViewFundStyles.text}>Rs.{raised}.00</Text>
                    </View>

                    <View style={{
                        marginHorizontal: 20,
                        marginVertical: 10,
                    }}>
                        <ProgressBar progress={raised / budget} color="#13B156"
                            style={{
                                marginTop: 10,
                                borderRadius: 10,
                            }} />

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 10,
                        }}>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: "300",
                                color: "#09101D",
                            }}>{donors}</Text>

                            <Text style={{
                                fontSize: 12,
                                fontWeight: "300",
                                color: "#ff0000",
                            }}>{daysLeft}</Text>
                        </View>
                    </View>

                    <HorizontalLine />
                    <VerticleSpace height={10} />

                    <View>
                        <Text style={ViewFundStyles.section}>Description</Text>
                        <Text style={ViewFundStyles.description}>{description}</Text>
                    </View>

                    <VerticleSpace height={10} />
                    <HorizontalLine />
                    <VerticleSpace height={10} />

                    <Text style={ViewFundStyles.section}>Organization</Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 10,
                    }}>
                        <Micon name='apartment' color='#56616F' size={24} />
                        <Text style={{
                            fontSize: 16,
                            fontWeight: "500",
                            marginLeft: 10,
                        }}>Food Patron</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaProvider>
    )
}

export default ViewFundByOrganization