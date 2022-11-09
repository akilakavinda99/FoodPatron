import React from 'react'
import { View, Image, Text, Pressable, ScrollView } from 'react-native'
import FAcon from 'react-native-vector-icons/Feather';
import Micon from 'react-native-vector-icons/MaterialIcons';
import Eicon from 'react-native-vector-icons/Entypo';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { FAB, IconButton, TextInput } from "react-native-paper";
import ViewFundStyles from '../fund/styles/ViewFundStyles';
import HorizontalLine from '../../components/organization/HorizontalLine';
import VerticleSpace from '../../components/organization/VerticleSpace';


export default function ViewFundRequest() {
  return (
    <SafeAreaProvider style={{
        flex: 1,
        backgroundColor: '#fff'
    }}>
        {/* Heading */}
        <SafeAreaView style={ViewFundStyles.body}>
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
                {/* Request Fund image */}
                <View style={ViewFundStyles.fundImage}>
                    <Image
                        style={{
                            height: 185,
                            borderRadius: 10,
                        }}
                        resizeMode="cover"
                        source={require('../../../assets/test.png')}
                    />
                </View>


            {/* Fund details */}
            <View style={{
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                }}>
                    <Text style={ViewFundStyles.fundTitle}>Donation for poor family</Text>

                    <HorizontalLine />
                    <VerticleSpace height={10} />

                    <View style={{
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'space-between',
                    }}>

                    </View>
                    <VerticleSpace height={10} />
                    <View style={{
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'space-between',
                    }}>
                    </View>


                    <View>
                        <Text style={ViewFundStyles.section}>Description</Text>
                        <Text style={ViewFundStyles.description}> We have identified over 100 refugee families and their children to be part of a food protection program. The families are currently living in tent cities in Adana Turkey. The majority of the families are widows with either teen daughters, pre-teen girls, or with a very large family. The families will receive 50 to 75 kilos of food each month for a year, with the aim of helping the young girls to continue their studies. RGW also will be supplying refugee women's and men's homes with over 100 kilos of basic nutritious food every month!</Text>
                    </View>

                    <VerticleSpace height={10} />
                    <HorizontalLine />
                    <VerticleSpace height={10} />

                    <Text style={ViewFundStyles.section}>Organizer</Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 10,
                    }}>
                        <Eicon name='user' color='#56616F' size={24} />
                        <Text style={{
                            fontSize: 16,
                            fontWeight: "500",
                            marginLeft: 10,
                        }}>Thushal shaminda</Text>
                    </View>
                </View>

            </ScrollView>
    </SafeAreaProvider>
  )
}