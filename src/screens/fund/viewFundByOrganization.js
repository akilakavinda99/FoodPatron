import React from 'react'
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import FAcon from 'react-native-vector-icons/Feather';
import Micon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import VerticleSpace from '../../components/organization/VerticleSpace';
import { ProgressBar } from 'react-native-paper';

function ViewFundByOrganization({ navigation, route }) {
    const { title, image, target, donors, daysLeft, raised, budget, description } = route.params;

    return (
        <SafeAreaProvider style={{
            flex: 1,
            backgroundColor: '#fff'
        }}>
            {/* Heading */}
            <SafeAreaView style={{
                backgroundColor: "#fff",
                paddingHorizontal: 20,
                paddingVertical: 10,
            }}>
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
                <View style={{
                    borderRadius: 10,
                    marginVertical: 10,
                    marginHorizontal: 20,
                    height: 185,
                    elevation: 5,
                }}>
                    <Image
                        style={{
                            flex: 1,
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
                    <Text style={{
                        fontSize: 22,
                        marginBottom: 8,
                        fontWeight: "700",
                        textAlign: 'center',
                    }}>{title}</Text>

                    <View
                        style={{
                            borderBottomColor: '#E8E8E8',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }}
                    />
                    <VerticleSpace height={10} />
                    <View style={{
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'space-between',
                    }}>
                        <Text style={{
                            fontSize: 14,
                            color: "#09101D",
                            fontWeight: "500",
                            width: '15%',
                        }}>Target</Text>
                        <Text style={{
                            fontSize: 15,
                            fontWeight: "300",
                            color: "#09101D",
                            width: '80%',
                            textAlign: 'justify',
                        }}>{target}</Text>

                    </View>
                    <VerticleSpace height={10} />
                    <View style={{
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'space-between',
                    }}>
                        <Text style={{
                            fontSize: 14,
                            color: "#09101D",
                            fontWeight: "500",
                            width: '15%',
                        }}>Budget</Text>
                        <Text style={{
                            fontSize: 15,
                            fontWeight: "300",
                            color: "#09101D",
                            width: '80%',
                        }}>Rs.{raised}.00</Text>
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
                    <View
                        style={{
                            borderBottomColor: '#E8E8E8',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }}
                    />
                    <VerticleSpace height={10} />
                    <View>
                        <Text style={{
                            fontSize: 14,
                            color: "#09101D",
                            fontWeight: "500",
                        }}>Description</Text>
                        <Text style={{
                            fontSize: 15,
                            fontWeight: "300",
                            color: "#09101D",
                            textAlign: 'justify',
                        }}>{description}</Text>

                    </View>
                    <View
                        style={{
                            borderBottomColor: '#E8E8E8',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }}
                    />
                    <VerticleSpace height={10} />
                    <Text style={{
                        fontSize: 14,
                        color: "#09101D",
                        fontWeight: "500",
                    }}>Organization</Text>
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