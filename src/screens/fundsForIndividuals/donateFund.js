import React, { useEffect, useState } from "react";
import { Modal, Pressable, ScrollView, Text, View } from "react-native";
import FormSection from "../../components/organization/FormSection";
import FormTextInput from "../../components/organization/FormTextInput";
import GradientButton from "../../components/organization/GradientButton";
import VerticleSpace from "../../components/organization/VerticleSpace";
import ModalStyles from "../fund/styles/ModalStyles";
import Micon from "react-native-vector-icons/MaterialIcons";
import FAcon from "react-native-vector-icons/FontAwesome5";
import { CardValidation } from "./CardValidation";
import ViewFundStyles from "../fund/styles/ViewFundStyles";
import { donateFund } from "../../api/fund.api";
import AsyncStorage from "@react-native-async-storage/async-storage";

function DonateFund({ route, navigation }) {
  const { fundID, organizationID } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [amount, setAmount] = useState("");
  const [amountError, setAmountError] = useState("");
  const [cardDetails, setCardDetails] = useState({})
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const numberPattern = /^[0-9]*$/;
  const [userID, setUserID] = useState("");

  const onChange = (name, value) => {
    setCardDetails({ ...cardDetails, [name]: value })
  };

  const onDonatePress = () => {
    if (!amount) {
      setAmountError("Please enter an amount");
    } else if (!numberPattern.test(amount)) {
      setAmountError('Amount can only contain numbers')
    } else if (Number(amount) < 1) {
      setAmountError('Amount must be greater than 0')
    } else {
      setAmountError("")
    }

    setFormErrors(CardValidation(cardDetails))
    setIsSubmitting(true)
  };

  const onPressOK = () => {
    setModalVisible(false);
    navigation.navigate("AllFunds");
  };

  const handleExpiryChange = text => {
    if (text.length === 2) {
      setCardDetails({ ...cardDetails, cardExpiry: text + '/' });
    } else if (text.length > 2 && text[2] !== '/') {
      setCardDetails({
        ...cardDetails,
        cardExpiry: text.slice(0, 2) + '/' + text.slice(2, 4),
      });
    }
  };

  const getOrgID = async () => {
    const uID = await AsyncStorage.getItem("userID");
    setUserID(uID);
  }

  useEffect(() => {
    getOrgID();
  }, [])

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting && Number(amount) > 0) {
      donateFund(fundID, {
        amount: amount,
        organizationID: organizationID,
        fundID: fundID,
        userID: userID
      }).then(res => {
        setModalVisible(true);
      }).catch(err => {
        console.log(err);
      })
      setIsSubmitting(false)
    } else {
      setIsSubmitting(false)
    }
  }, [formErrors, isSubmitting, amountError])

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
          onChangeText={(value) => setAmount(value)}
          keyboardType='numeric' />
        <Text style={ViewFundStyles.errorText}>{amountError}</Text>

        <VerticleSpace height={24} />

        <FormSection section="Card Details" />
        <FormTextInput
          title="Name on card"
          placeholder="Name on card"
          required={true}
          onChangeText={(value) => onChange("name", value)}
        />
        <Text style={ViewFundStyles.errorText}>{formErrors.name}</Text>

        <FormTextInput
          title="Card Number"
          placeholder="Card Number"
          required={true}
          maxLength={16}
          keyboardType="numeric"
          onChangeText={(value) => onChange("cardNumber", value)}
        />
        <Text style={ViewFundStyles.errorText}>{formErrors.cardNumber}</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: "45%" }}>
            <FormTextInput
              title="Card Expire"
              placeholder="MM/YY"
              required={true}
              keyboardType="numeric"
              maxLength={5}
              value={cardDetails.cardExpiry}
              onChangeText={(value) => {
                onChange("cardExpiry", value)
                handleExpiryChange(value)
              }}
            />
            <Text style={ViewFundStyles.errorText}>{formErrors.cardExpiry}</Text>
          </View>

          <View style={{ width: "45%" }}>
            <FormTextInput
              title="CVV"
              placeholder="***"
              required={true}
              maxLength={4}
              keyboardType="numeric"
              onChangeText={(value) => onChange("cvv", value)}
            />
            <Text style={ViewFundStyles.errorText}>{formErrors.cvv}</Text>
          </View>
        </View>

        <View
          style={{
            height: 55,
            marginVertical: 24,
          }}
        >
          <GradientButton text="Donate" onPress={onDonatePress} />
        </View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
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
                onPress={onPressOK}
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
