import React from 'react';
import { View, Text } from 'react-native';
import InputField from '../components/InputField';
import Button from '../components/Button';
import globalStyles from '../styles/globalStyles';

const SignInScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text>Sign In</Text>
      <InputField placeholder="Email" />
      <InputField placeholder="Password" secureTextEntry />
      <Button label="Sign In" onPress={() => navigation.navigate('Order')} />
    </View>
  );
};

export default SignInScreen;
