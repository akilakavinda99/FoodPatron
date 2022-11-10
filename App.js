import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SecondScreen from "./src/screens/secondScreen";
import HomeScreen from "./src/screens/homeScreen";

import DonationView from "./src/screens/donator/donationView";
import AllDonations from "./src/screens/donator/allDonations";
import CreateDonation from "./src/screens/donator/createDonation";
import SendRequest from "./src/screens/donator/sendRequest";
import OnboardingScreen from "./src/screens/onboardingScreen";
import DonationDashboard from "./src/screens/donator/donationDashboard";
import MyDonations from "./src/screens/donator/myDonations";
import ApprovedRequests from "./src/screens/donator/approvedRequests";
import OrgRegStepOne from "./src/screens/organization/registration/stepOne";
import OrgRegStepTwo from "./src/screens/organization/registration/stepTwo";
import OrgRegStepThree from "./src/screens/organization/registration/stepThree";
import OrgRegStepFour from "./src/screens/organization/registration/stepFour";
import CreateOrganizationFund from "./src/screens/fund/createOrganizationFund";
import OrganizationNavigation from "./src/components/organization/OrganizationNavigation";
import EditDonation from "./src/screens/donator/editDonation";
import PendingRequestss from "./src/screens/donator/pendingRequests";
import PendingReqView from "./src/screens/donator/pendingReqView";
import AcceptedRequests from "./src/screens/donator/acceptedRequests";
import ViewFundByOrganization from "./src/screens/fund/viewFundByOrganization";
import CommonBottomNav from "./src/components/common/commonNav";
import ViewRequestByOrganization from "./src/screens/request/viewRequestByOrganization";
import ViewFundByIndividual from "./src/screens/fundsForIndividuals/viewFundByIndividual";
import ViewAllFunds from "./src/screens/fundsForIndividuals/viewAllFunds";
import OrgProfileView from "./src/screens/fundsForIndividuals/orgProfileView";
import DonateFund from "./src/screens/fundsForIndividuals/donateFund";
import EditFund from "./src/screens/fund/editFund";
import UpdateOrganizationDetails from "./src/screens/organization/updateOrganizationDetails";
import ViewFundRequest from "./src/screens/requester/ViewFundRequest";
import UpdateOrgMemberDetails from "./src/screens/organization/updateOrgMemberDetails";
import SignIn from "./src/screens/user/signIn";
import ChangeOrgPassword from "./src/screens/organization/changeOrgPassword";

export default function App() {
  //to show the onboarding screens only at the initial launch
  const [firstLaunch, setFirstLaunch] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    async function setData() {
      const appData = await AsyncStorage.getItem("appLaunched");
      setUserID(await AsyncStorage.getItem("userID"))
      setUserEmail(await AsyncStorage.getItem("userEmail"))
      setUserRole(await AsyncStorage.getItem("userRole"))

      if (appData == null) {
        setFirstLaunch(true);
        AsyncStorage.setItem("appLaunched", "false");
      } else {
        setFirstLaunch(false);
      }
    }
    setData();
  }, []);

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {firstLaunch ? (
          <Stack.Screen name="first" component={OnboardingScreen} />
        ) : (userID === null || userRole === null ? (
          <Stack.Screen
            name="signIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
        ) : (userRole === "1984" ?
          <Stack.Screen
            name='userHome'
            component={CommonBottomNav}
            options={{ headerShown: false }} />
          : (userRole === "5150" ?
            <Stack.Screen
              name="OrgHome"
              component={OrganizationNavigation}
              options={{ headerShown: false }}
            />
            : (userRole === "2001" ?
              <Stack.Screen
                name="AdminHome"
                component={CommonBottomNav}
                options={{ headerShown: false }}
              />
              : null)
          )
        ))}

        <Stack.Screen name="st" component={HomeScreen} />


        {/* *************************************** */}
        <Stack.Screen
          name="signInIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='userHomeIn'
          component={CommonBottomNav}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="OrgHomeIn"
          component={OrganizationNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AdminHomeIn"
          component={CommonBottomNav}
          options={{ headerShown: false }}
        />

        {/* *************************************** */}


        <Stack.Screen
          name="donationView"
          component={DonationView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="allDonations"
          component={AllDonations}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="createDonation"
          component={CreateDonation}
          options={{ title: "Lets create a donation" }}
        />
        <Stack.Screen
          name="sendRequest"
          component={SendRequest}
          options={{ title: "Lets send a request" }}
        />
        <Stack.Screen
          name="donationDashboard"
          component={DonationDashboard}
          options={{ title: "Donation Dashboard" }}
        />
        <Stack.Screen
          name="myDonations"
          component={MyDonations}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="pendingRequests"
          component={PendingRequestss}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="acceptedRequests"
          component={ApprovedRequests}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OrgRegStepOne"
          component={OrgRegStepOne}
          options={{ title: "New Organization" }}
        />
        <Stack.Screen
          name="OrgRegStepTwo"
          component={OrgRegStepTwo}
          options={{ title: "New Organization" }}
        />
        <Stack.Screen
          name="OrgRegStepThree"
          component={OrgRegStepThree}
          options={{ title: "New Organization" }}
        />
        <Stack.Screen
          name="OrgRegStepFour"
          component={OrgRegStepFour}
          options={{ title: "New Organization" }}
        />
        <Stack.Screen
          name="CreateOrganizationFund"
          component={CreateOrganizationFund}
          options={{ title: "Create new fund" }}
        />
        <Stack.Screen
          name="editDonation"
          component={EditDonation}
          options={{ title: "Edit your donation" }}
        />
        <Stack.Screen
          name="pendingReqView"
          component={PendingReqView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="acceptedReq"
          component={AcceptedRequests}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="viewFundByOrg"
          component={ViewFundByOrganization}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="viewRequestByOrg"
          component={ViewRequestByOrganization}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="viewAllFunds"
          component={ViewAllFunds}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="viewFundByIndividual"
          component={ViewFundByIndividual}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="orgProfileView"
          component={OrgProfileView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="donateFund"
          component={DonateFund}
          options={{ title: "Donate" }}
        />
        <Stack.Screen
          name="editFund"
          component={EditFund}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="updateOrgDetails"
          component={UpdateOrganizationDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="updateOrgMemberDetails"
          component={UpdateOrgMemberDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="fundReqView"
          component={ViewFundRequest}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="changeOrgPass"
          component={ChangeOrgPassword}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
