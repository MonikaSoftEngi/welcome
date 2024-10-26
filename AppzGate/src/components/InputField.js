import React from 'react';
import { TextInput } from 'react-native';
import globalStyles from '../styles/globalStyles';

const InputField = ({ placeholder, value, onChangeText, secureTextEntry }) => (
  <TextInput
    style={globalStyles.input}
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    secureTextEntry={secureTextEntry}
  />
);

export default InputField;
