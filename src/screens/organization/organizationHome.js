import React, { useEffect, useState } from 'react'
import { ActivityIndicator, RefreshControl, ScrollView, Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { getAllRequests } from '../../api/organization.api';
import DonationRequestsCard from '../../components/organization/DonationRequestsCard';
import PageHeader from '../../components/organization/PageHeader'
import CustomeSearchBar from '../../components/organization/SearchBar';

function OrganizationHome() {
    const [requests, setRequests] = useState([]);
    const [showingRequests, setShowingRequests] = useState([]);
    const [searchTerm, setsearchTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        setLoading(true);
        getAllRequests()
            .then((res) => {
                setRequests(res.data);
                setLoading(false);
            }).catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        setShowingRequests(requests.filter(request =>
            request.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
            request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            request.description.toLowerCase().includes(searchTerm.toLowerCase())
        ))
    }, [searchTerm, requests])

    const onRefresh = () => {
        setRefreshing(true);
        getAllRequests()
            .then((res) => {
                setRequests(res.data);
                setRefreshing(false);
            }).catch((err) => {
                console.log(err);
            });
    }

    return (
        <SafeAreaProvider style={{
            flex: 1,
            backgroundColor: '#fff'
        }}>
            <PageHeader title="Food Patron" icon="heart" />
            <CustomeSearchBar onSearch={(search) => { setsearchTerm(search) }} />

            <ScrollView refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />}
                style={{
                    marginTop: 10,
                }}>
                {loading ? (
                    <ActivityIndicator size="large" />
                ) : requests.length == 0 ? (
                    <Text style={{
                        fontSize: 16,
                        fontWeight: "500",
                        marginVertical: 10,
                        marginHorizontal: 20,
                    }}>No request found</Text>
                ) : requests.length > 0 && showingRequests.length == 0 ? (
                    <Text style={{
                        fontSize: 16,
                        fontWeight: "500",
                        marginVertical: 10,
                        marginHorizontal: 20,
                    }}>No search result</Text>
                ) : (
                    showingRequests.map(request =>
                        <DonationRequestsCard
                            key={request._id}
                            title={request.title}
                            image={request.requestImage}
                            description={request.description}
                            fname={request.fname}
                            lname={request.lname}
                            email={request.email}
                            userId={request.userId}
                            country={request.country}
                            address={request.address}
                            tel={request.tpno} />
                    )
                )}

            </ScrollView>
        </SafeAreaProvider>
    )
}

export default OrganizationHome