import React, { useState } from 'react'
import { ActivityIndicator, Alert, Image, Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import FAcon from 'react-native-vector-icons/Feather';
import Micon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import VerticleSpace from '../../components/organization/VerticleSpace';
import { ProgressBar, Snackbar } from 'react-native-paper';
import ViewFundStyles from './styles/ViewFundStyles';
import HorizontalLine from '../../components/organization/HorizontalLine';
import ModalStyles from './styles/ModalStyles';
import { removeFund } from '../../api/fund.api';

function ViewFundByOrganization({ navigation, route }) {
    const { fundID, title, image, target, donors, daysLeft, raised, budget, description } = route.params;
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    // console.log(route.params);

    const deleteFund = () => {
        setLoading(true);
        removeFund(fundID).then(res => {
            navigation.navigate("OrgFunds", { snackNotification: "Successfully Deleted" });
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            setLoading(false);
        })
    }

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
                        <Pressable onPress={() => { navigation.navigate('editFund', { fundID: fundID }) }}
                            style={{
                                marginRight: 20,
                            }}>
                            <FAcon name='edit' color='#13B156' size={24} />
                        </Pressable>
                        <Pressable onPress={() => { setModalVisible(true) }}>
                            <FAcon name='trash' color='#FF395E' size={24} />
                        </Pressable>
                    </View>
                </View>
            </SafeAreaView>

            <ScrollView>
                {/* Fund image */}
                <View style={ViewFundStyles.fundImage}>
                    <Image
                        style={{
                            height: 185,
                            borderRadius: 10,
                        }}
                        resizeMode="cover"
                        source={{
                            uri: image,
                        }}
                    />
                </View>

                {/* Fund details */}
                <View style={{
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                }}>
                    <Text style={ViewFundStyles.fundTitle}>{title}</Text>

                    <HorizontalLine />
                    <VerticleSpace height={10} />

                    <View style={{
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'space-between',
                    }}>
                        <Text style={ViewFundStyles.label}>Target</Text>
                        <Text style={ViewFundStyles.text}>{target}</Text>

                    </View>
                    <VerticleSpace height={10} />
                    <View style={{
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'space-between',
                    }}>
                        <Text style={ViewFundStyles.label}>Budget</Text>
                        <Text style={ViewFundStyles.text}>Rs.{budget}.00</Text>
                    </View>

                    <View style={{
                        marginHorizontal: 20,
                        marginVertical: 10,
                    }}>
                        <ProgressBar progress={raised / budget} color="#13B156"
                            style={{
                                marginTop: 10,
                                borderRadius: 10,
                            }} />

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 10,
                        }}>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: "300",
                                color: "#09101D",
                            }}>{donors}</Text>

                            <Text style={{
                                fontSize: 12,
                                fontWeight: "300",
                                color: "#ff0000",
                            }}>{daysLeft}</Text>
                        </View>
                    </View>

                    <HorizontalLine />
                    <VerticleSpace height={10} />

                    <View>
                        <Text style={ViewFundStyles.section}>Description</Text>
                        <Text style={ViewFundStyles.description}>{description}</Text>
                    </View>

                    <VerticleSpace height={10} />
                    <HorizontalLine />
                    <VerticleSpace height={10} />

                    <Text style={ViewFundStyles.section}>Organization</Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 10,
                    }}>
                        <Micon name='apartment' color='#56616F' size={24} />
                        <Text style={{
                            fontSize: 16,
                            fontWeight: "500",
                            marginLeft: 10,
                        }}>Food Patron</Text>
                    </View>
                </View>
            </ScrollView>

            {/* Delete confirmation modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={ModalStyles.background}>
                    <View style={ModalStyles.centeredView}>
                        <View style={ModalStyles.modalView}>
                            {loading ? <ActivityIndicator size="large" color="#13B156" /> :
                                (<>
                                    <FAcon name='trash-2' color='#FF395E' size={45} />
                                    <Text style={ModalStyles.modalText}>Are you sure you want to delete this fundraising?</Text>
                                    <View style={ModalStyles.buttonContainer}>
                                        <Pressable
                                            style={[ModalStyles.button, ModalStyles.btnDeleteNo]}
                                            onPress={() => setModalVisible(!modalVisible)}
                                        >
                                            <Text style={ModalStyles.btnDeleteNoText}>NO</Text>
                                        </Pressable>
                                        <Pressable
                                            style={[ModalStyles.button, ModalStyles.btnDeleteYes]}
                                            onPress={deleteFund}
                                        >
                                            <Text style={ModalStyles.btnDeleteYesText}>YES</Text>
                                        </Pressable>
                                    </View>
                                </>)}
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaProvider>
    )
}



export default ViewFundByOrganization