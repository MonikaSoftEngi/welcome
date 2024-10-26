import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Loader = ({ loading }) => (
  loading ? (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#3498db" />
    </View>
  ) : null
);

export default Loader;
