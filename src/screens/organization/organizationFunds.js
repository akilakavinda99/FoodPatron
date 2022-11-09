import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, RefreshControl, ScrollView, Text } from 'react-native'
import { Snackbar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Micon from 'react-native-vector-icons/MaterialIcons';
import { getFundByOrganization } from '../../api/fund.api';
import FundFilterChips from '../../components/organization/FundFilterChips';
import OrganizationFundsCard from '../../components/organization/OrganizationFundsCard';
import PageHeader from '../../components/organization/PageHeader'
import CustomeSearchBar from '../../components/organization/SearchBar';
import { getRemainingTime } from '../../utils/getRemainingTime';

function OrganizationFunds({ snackNotification }) {
    const organizationID = "6336ad5ea9f14b49dbf42f8c"; // for testing
    const isFocused = useIsFocused();

    const [funds, setFunds] = useState([]);
    const [filteredFunds, setFilteredFunds] = useState([]);
    const [showingFunds, setShowingFunds] = useState([]);
    const [searchTerm, setsearchTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [snackBarVisible, setSnackBarVisible] = useState(false);
    const [filterChip, setFilterChip] = useState("");

    // useEffect(() => {
    //     if (snackNotification) {
    //         setSnackBarVisible(true);
    //         snackNotification = "";
    //         route.params.snackNotification = "";
    //     }
    // }, [snackNotification, isFocused])


    useEffect(() => {
        setLoading(true);
        getFundByOrganization(organizationID)
            .then((res) => {
                setFunds(res.data.result);
                setLoading(false);
            }).catch((err) => {
                console.log(err);
            });
    }, [organizationID, isFocused]);

    useEffect(() => {
        setShowingFunds(funds.filter(fund => (
            fund.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            fund.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
            fund.status.toLowerCase().includes(filterChip.toLowerCase())
        ))
    }, [filterChip, searchTerm, funds])

    const onRefresh = () => {
        setRefreshing(true);
        getFundByOrganization(organizationID)
            .then((res) => {
                setFunds(res.data.result);
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
            <PageHeader title="Organization Funds" icon="heart" />
            <CustomeSearchBar onSearch={(search) => { setsearchTerm(search) }} />
            <FundFilterChips selectedChip={filterChip} onSelectChip={(value) => { setFilterChip(value) }} />

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
                ) : funds.length == 0 ? (
                    <Text style={{
                        fontSize: 16,
                        fontWeight: "500",
                        marginVertical: 10,
                        marginHorizontal: 20,
                    }}>No funds found</Text>
                ) : funds.length > 0 && showingFunds.length == 0 ? (
                    <Text style={{
                        fontSize: 16,
                        fontWeight: "500",
                        marginVertical: 10,
                        marginHorizontal: 20,
                    }}>No search result</Text>
                ) : (
                    showingFunds.map((fund) => (
                        <OrganizationFundsCard
                            key={fund._id}
                            fundID={fund._id}
                            title={fund.title}
                            image={fund.fundImage}
                            target={fund.target}
                            donors={fund.numOfDonations + " donor(s)"}
                            daysLeft={getRemainingTime(fund.endingDate)}
                            raised={fund.currentAmount}
                            budget={fund.budget}
                            description={fund.description}
                            status={fund.status}
                            userType='organization' />
                    ))
                )}

            </ScrollView>

            <Snackbar
                visible={snackBarVisible}
                onDismiss={() => setSnackBarVisible(false)}
                duraration={3000}
                action={{
                    label: <Micon name='close' color='#fff' size={24} />,
                    onPress: () => {
                        // Do something
                    },
                }}>
                {snackNotification}
            </Snackbar>

        </SafeAreaProvider>
    )
}

export default OrganizationFunds