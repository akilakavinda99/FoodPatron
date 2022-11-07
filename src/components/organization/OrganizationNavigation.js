import React from 'react'
import FAcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OrgRegStepOne from '../../screens/organization/registration/stepOne';
import OrganizationFunds from '../../screens/organization/organizationFunds';
import CreateOrganizationFund from '../../screens/fund/createOrganizationFund';
import OrganizationProfile from '../../screens/organization/organizationProfile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ViewFundByOrganization from '../../screens/fund/viewFundByOrganization';

function OrganizationNavigation() {
    // Instanciate bottom tab.
    const Tab = createBottomTabNavigator();

    // Funds tab stack.
    const FundsStack = createNativeStackNavigator();

    // function FundsStackScreen() {
    //     return (
    //         <FundsStack.Navigator>
    //             <FundsStack.Screen name="Funds" options={{ headerShown: false }} component={OrganizationFunds} />
    //             <FundsStack.Screen name="ViewFund" options={{ headerShown: false }} component={ViewFundByOrganization} />
    //         </FundsStack.Navigator>
    //     );
    // }

    return (
        <Tab.Navigator initialRouteName="HomeScreen"
            screenOptions={{
                tabBarStyle: {
                    height: 60,
                },
                headerShown: false,
            }}>
            <Tab.Screen
                name="HomeScreen"
                component={CreateOrganizationFund}
                options={{
                    headerShown: false,
                    title: 'Home',
                    tabBarIcon: ({ color, size, focused }) => (
                        focused ?
                            <MIcon name="home" color='#13B156' size={size} style={{ backgroundColor: '#E8F8EF', paddingHorizontal: 20, paddingVertical: 5, borderRadius: 20 }} />
                            : <MIcon name="home" color='#13B156' size={size} />
                    ),
                    tabBarLabelStyle: {
                        color: '#13B156',
                    }
                }}
            />
            <Tab.Screen
                name="NewFund"
                component={CreateOrganizationFund}
                options={{
                    headerShown: false,
                    title: 'Create new fund',
                    tabBarIcon: ({ color, size, focused }) => (
                        focused ?
                            <MIcon name="add-circle" color='#13B156' size={size} style={{ backgroundColor: '#E8F8EF', paddingHorizontal: 20, paddingVertical: 5, borderRadius: 20 }} />
                            : <MIcon name="add-circle" color='#13B156' size={size} />
                    ),
                    tabBarLabelStyle: {
                        color: '#13B156',
                    }
                }}
            />
            <Tab.Screen
                name="OrgFunds"
                component={OrganizationFunds}
                options={{
                    headerShown: false,
                    title: 'Funds',
                    tabBarIcon: ({ color, size, focused }) => (
                        focused ?
                            <MIcon name="toll" color='#13B156' size={size} style={{ backgroundColor: '#E8F8EF', paddingHorizontal: 20, paddingVertical: 5, borderRadius: 20 }} />
                            : <MIcon name="toll" color='#13B156' size={size} />
                    ),
                    tabBarLabelStyle: {
                        color: '#13B156',
                    }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={OrganizationProfile}
                options={{
                    headerShown: false,
                    title: 'Profile',
                    tabBarIcon: ({ color, size, focused }) => (
                        focused ?
                            <MIcon name="domain" color='#13B156' size={size} style={{ backgroundColor: '#E8F8EF', paddingHorizontal: 20, paddingVertical: 5, borderRadius: 20 }} />
                            : <MIcon name="domain" color='#13B156' size={size} />
                    ),
                    tabBarLabelStyle: {
                        color: '#13B156',
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default OrganizationNavigation