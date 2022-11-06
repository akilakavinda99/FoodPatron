import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Chip } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FundFilterChips from '../../components/organization/FundFilterChips';
import OrganizationFundsCard from '../../components/organization/OrganizationFundsCard';
import PageHeader from '../../components/organization/PageHeader'
import CustomeSearchBar from '../../components/organization/SearchBar';

function OrganizationFunds() {
    return (
        <SafeAreaProvider style={{
            flex: 1,
            backgroundColor: '#fff'
        }}>
            <PageHeader title="Organization Funds" icon="heart" />
            <CustomeSearchBar />
            <FundFilterChips />
            <ScrollView style={{
                marginVertical: 10,
            }}>
                {/* <Text style={{
                    fontSize: 16,
                    fontWeight: "500",
                    marginVertical: 10,
                    marginHorizontal: 20,
                }}>No funds found</Text> */}
                <OrganizationFundsCard
                    title={"Food Protection Program"}
                    image={"http://res.cloudinary.com/dicjf8jjn/image/upload/v1664568824/akila/qtrix6ndcxkdih2xdbxq.jpg"}
                    target={"We have identified over 100 refugee families and their children to be part of a food protection program"}
                    donors={"16 Donors"}
                    daysLeft={"9 days left"}
                    raised={10000}
                />
            </ScrollView>
        </SafeAreaProvider>
    )
}

export default OrganizationFunds