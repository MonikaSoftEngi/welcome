import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import globalStyles from '../styles/globalStyles';

const Button = ({ label, onPress, loading }) => (
  <TouchableOpacity style={globalStyles.button} onPress={onPress} disabled={loading}>
    {loading ? <ActivityIndicator color="#fff" /> : <Text style={{ color: '#fff' }}>{label}</Text>}
  </TouchableOpacity>
);

export default Button;
