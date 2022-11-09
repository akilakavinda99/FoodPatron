import * as React from 'react';
import { Checkbox } from 'react-native-paper';
import {
  View,
} from "react-native";

const FormCheckBox = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <View>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
    </View>
  );
};

export default FormCheckBox;