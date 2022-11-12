import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Micon from "react-native-vector-icons/MaterialIcons";
import Eicon from "react-native-vector-icons/Entypo";
import { FAB, IconButton, TextInput } from "react-native-paper";
import HorizontalLine from "../../components/organization/HorizontalLine";
import VerticleSpace from "../../components/organization/VerticleSpace";
import OrgProfileOption from "../../components/organization/OrgProfileOption";
import PageHeader from "../../components/organization/PageHeader";
import MIcon from 'react-native-vector-icons/MaterialIcons';
import { logOut } from "../../utils/logout";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const navigation = useNavigation();
  return (
    <SafeAreaProvider
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <IconButton
          icon="arrow-left"
          style={{
            marginLeft: 25,
            marginTop: 12,
          }}
        />
        <Text
          style={{
            marginTop: 15,
            marginLeft: 50,
            fontSize: 20,
            fontWeight: "bold",
          }}
        ></Text>
      </View>

      <ScrollView>
        <View
          style={{
            alignItems: "center",
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              borderColor: "#13B156",
              borderWidth: 2,
              height: 100,
              width: 100,
              borderRadius: 50,
              marginRight: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Eicon name="user" color="#13B156" size={60} />
          </View>

          <Text
            style={{
              marginTop: 20,
              fontSize: 22,
              fontWeight: "600",
            }}
          >
            Akila Kavinda
          </Text>

          <VerticleSpace height={10} />
          <HorizontalLine />
          <VerticleSpace height={10} />

          <View
            style={{
              width: "100%",
            }}
          >
            <OrgProfileOption title="My Fund Requests" icon="toll" />
            <HorizontalLine />
            <OrgProfileOption
              title="My Donations"
              icon="assignment"
              onPress="donationDashboard"
            />
            <HorizontalLine />
            <OrgProfileOption title="Edit Profile" icon="edit" />
            <HorizontalLine />
            <OrgProfileOption title="Change Password" icon="lock" />
            <HorizontalLine />
            {/* <OrgProfileOption title="Logout" icon="logout" /> */}
            <Pressable onPress={() => {
                        logOut();
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'signInIn' }],
                        });
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingVertical: 10,
                            paddingHorizontal: 10,

                        }}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: '700',
                            }}>Logout</Text>
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#FFE8ED',
                                borderRadius: 50,
                                padding: 5,
                            }}>
                                <MIcon name='logout' size={24} color="#FF395E" />
                            </View>
                        </View>
                    </Pressable>
            <HorizontalLine />

            <VerticleSpace height={10} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}
