import React from 'react'
import MIcon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OrgRegStepOne from '../../screens/organization/registration/stepOne';

function OrganizationNavigation() {
    // Instanciate bottom tab.
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator initialRouteName="HomeScreen"
            screenOptions={{
                tabBarStyle: {
                    height: 60,
                }
            }}>
            <Tab.Screen
                name="HomeScreen"
                component={OrgRegStepOne}
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
                component={OrgRegStepOne}
                options={{
                    headerShown: false,
                    title: 'New Fund',
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
                component={OrgRegStepOne}
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
                component={OrgRegStepOne}
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