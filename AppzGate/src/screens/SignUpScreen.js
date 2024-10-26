import React, { useState } from 'react';
import { View, Text } from 'react-native';
import InputField from '../components/InputField';
import Button from '../components/Button';
import globalStyles from '../styles/globalStyles';

const SignUpScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const handleSignUp = () => {
    setLoading(true);
    // Perform sign-up logic here
    setLoading(false);
    navigation.navigate('SignIn');
  };

  return (
    <View style={globalStyles.container}>
      <Text>Sign Up</Text>
      <InputField placeholder="Email" />
      <InputField placeholder="Password" secureTextEntry />
      <Button label="Sign Up" onPress={handleSignUp} loading={loading} />
    </View>
  );
};

export default SignUpScreen;
