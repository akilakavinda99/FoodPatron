import React, { useEffect, useState } from "react";
import { Modal, Pressable, ScrollView, Text, View } from "react-native";
import FormSection from "../../components/organization/FormSection";
import FormTextInput from "../../components/organization/FormTextInput";
import GradientButton from "../../components/organization/GradientButton";
import VerticleSpace from "../../components/organization/VerticleSpace";
import ModalStyles from "../fund/styles/ModalStyles";
import Micon from "react-native-vector-icons/MaterialIcons";
import FAcon from "react-native-vector-icons/FontAwesome5";

function DonateFund() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View
      style={{
        backgroundColor: "white",
        height: "100%",
      }}
    >
      <ScrollView style={{ paddingHorizontal: 20 }}>
        <FormTextInput
          title="Amout"
          placeholder="Amount"
          required={true}
          onChangeText={(value) => onChange("title", value)}
        />
        <VerticleSpace height={24} />

        <FormSection section="Card Details" />
        <FormTextInput
          title="Name on card"
          placeholder="Name on card"
          required={true}
          onChangeText={(value) => onChange("target", value)}
        />
        <FormTextInput
          title="Card Number"
          placeholder="Card Number"
          required={true}
          keyboardType="numeric"
          onChangeText={(value) => onChange("description", value)}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: "45%" }}>
            <FormTextInput
              title="Card Expire"
              placeholder="MM/YY"
              required={true}
              keyboardType="numeric"
              onChangeText={(value) => onChange("contactEmail", value)}
            />
          </View>
          <View style={{ width: "45%" }}>
            <FormTextInput
              title="CVV"
              placeholder="***"
              required={true}
              keyboardType="numeric"
              onChangeText={(value) => onChange("contactNumber", value)}
            />
          </View>
        </View>

        <View
          style={{
            height: 55,
            marginVertical: 24,
          }}
        >
          <GradientButton text="Donate" />
        </View>
      </ScrollView>

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
              <Micon name="check-circle" color="#13B156" size={45} />
              <Text style={ModalStyles.modalText}>
                You have successfuly donated!
              </Text>
              <Pressable
                style={[ModalStyles.button, ModalStyles.btnOK]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={ModalStyles.btnOKText}>OK</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default DonateFund;
