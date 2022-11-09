import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import PageHeader from '../../components/organization/PageHeader'
import Micon from 'react-native-vector-icons/MaterialIcons';
import HorizontalLine from '../../components/organization/HorizontalLine';
import VerticalLine from '../../components/organization/VerticalLine';
import OrgProfileOption from '../../components/organization/OrgProfileOption';
import VerticleSpace from '../../components/organization/VerticleSpace';
import { getOrgDashSummary } from '../../api/organization.api';

function OrganizationProfile() {
    const organizationID = "6336ad5ea9f14b49dbf42f8c"; // for testing
    const [orgSummary, setOrgSummary] = useState({
        totalFundsAmount: 0,
        activeFunds: 0,
        totalDonors: 0,
    });

    useEffect(() => {
        getOrgDashSummary(organizationID)
            .then((res) => {
                setOrgSummary(res.data.summary);
            }).catch((err) => {
                console.log(err);
            });
    }, [organizationID]);

    // add comma before every 3 digits and add .00 at the end
    const numberWithCommas = (x) => {
        // return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ".00";
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

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


                {/* Organization summary */}
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
                            }}>{numberWithCommas(orgSummary.totalFundsAmount)}</Text>
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
                            }}>{orgSummary.activeFunds}</Text>
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
                            }}>{orgSummary.totalDonors}</Text>
                            <Text style={{
                                fontSize: 15,
                            }}>Contributors</Text>
                        </View>
                    </View>
                    <VerticleSpace height={10} />
                    <HorizontalLine />

                    <VerticleSpace height={10} />

                    <OrgProfileOption title="Organization Funds" icon="toll" onPress="OrgFunds" />
                    <HorizontalLine />
                    <OrgProfileOption title="Generate Reports" icon="assignment" onPress="orgFunds" />
                    <HorizontalLine />
                    <OrgProfileOption title="Edit Organization Details" icon="edit" onPress="updateOrgDetails" />
                    <HorizontalLine />
                    <OrgProfileOption title="Edit Member Details" icon="people" onPress="orgFunds" />
                    <HorizontalLine />
                    <OrgProfileOption title="Link Social Media" icon="language" onPress="orgFunds" />
                    <HorizontalLine />
                    <OrgProfileOption title="Change Password" icon="lock" onPress="orgFunds" />
                    <HorizontalLine />
                    <OrgProfileOption title="Logout" icon="logout" onPress="orgFunds" />
                    <HorizontalLine />
                </View>

                <VerticleSpace height={20} />

            </ScrollView>
        </SafeAreaProvider>
    )
}

export default OrganizationProfile