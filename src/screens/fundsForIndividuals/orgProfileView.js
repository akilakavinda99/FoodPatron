import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import PageHeader from '../../components/organization/PageHeader'
import Micon from 'react-native-vector-icons/MaterialIcons';
import FAicon from 'react-native-vector-icons/FontAwesome5';
import HorizontalLine from '../../components/organization/HorizontalLine';
import VerticalLine from '../../components/organization/VerticalLine';
import OrgProfileOption from '../../components/organization/OrgProfileOption';
import VerticleSpace from '../../components/organization/VerticleSpace';

function OrgProfileView() {
    return (
        <SafeAreaProvider style={{
            flex: 1,
            backgroundColor: '#fff'
        }}>
            <PageHeader title="Profile" icon="group" />

            {/* Organization image and name */}
            <ScrollView>
                <View style={{
                    alignItems: 'center',
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                }}>
                    <View style={{
                        backgroundColor: '#fff',
                        borderColor: '#13B156',
                        borderWidth: 2,
                        height: 100,
                        width: 100,
                        borderRadius: 50,
                        marginRight: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }} >
                        <Micon name='apartment' color='#13B156' size={80} />
                    </View>
                    <Text style={{
                        marginTop: 10,
                        fontSize: 22,
                        fontWeight: '600',
                    }}>Food Patron</Text>
                </View>


                {/* Organization details */}
                <View style={{
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                }}>
                    <HorizontalLine />
                    <VerticleSpace height={10} />

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                    }}>
                        <View style={{
                            alignItems: 'center',
                        }}>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: '700',
                            }}>145,000</Text>
                            <Text style={{
                                fontSize: 15,
                            }}>Raised (Rs.)</Text>
                        </View>

                        <VerticalLine />

                        <View style={{
                            alignItems: 'center',
                        }}>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: '700',
                            }}>3</Text>
                            <Text style={{
                                fontSize: 15,
                            }}>Active Funds</Text>
                        </View>

                        <VerticalLine />

                        <View style={{
                            alignItems: 'center',
                        }}>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: '700',
                            }}>47</Text>
                            <Text style={{
                                fontSize: 15,
                            }}>Contributors</Text>
                        </View>
                    </View>

                    <VerticleSpace height={10} />
                    <HorizontalLine />
                    <VerticleSpace height={10} />

                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                        <Text style={styles.label}>Address</Text>
                        <Text style={styles.text}>Welfare road, Kalutara</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', width: '50%' }}>
                            <Text style={styles.label}>Country</Text>
                            <Text style={styles.text}>Sri Lanka</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '50%' }}>
                            <Text style={styles.label}>ZIP Code</Text>
                            <Text style={styles.text}>12000</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                        <Text style={styles.label}>Email</Text>
                        <Text style={styles.text}>foodpatron@welfare.com</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                        <Text style={styles.label}>Contact Number</Text>
                        <Text style={styles.text}>0112756481</Text>
                    </View>
                    <HorizontalLine />
                </View>

                <View style={{ marginLeft: 20 }}>
                    <Text style={styles.section}>Social Media</Text>
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', paddingHorizontal: 30 }}>
                        <Micon name='facebook' color='#09101D' size={35} />
                        <FAicon name='instagram-square' color='#09101D' size={35} />
                        <FAicon name='youtube' color='#09101D' size={35} />
                    </View>
                </View>



            </ScrollView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 15,
        fontWeight: '700',
        width: 80,
        marginBottom: 10,
    },
    text: {
        fontSize: 15,
        flex: 1,
    },
    section: {
        fontSize: 16,
        color: "#09101D",
        fontWeight: "700",
    },
})

export default OrgProfileView