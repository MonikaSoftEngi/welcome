import React from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import globalStyles from '../styles/globalStyles';
import Button from '../components/Button';

const CheckoutScreen = ({ route, navigation }) => {
  const { cartItems, total } = route.params;

  // Function to confirm the order
  const confirmOrder = () => {
    Alert.alert(
      'Order Confirmation',
      'Your order has been placed successfully!',
      [{ text: 'OK', onPress: () => navigation.navigate('Order') }]
    );
  };

  return (
    <View style={globalStyles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Order Summary</Text>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 20, padding: 10, borderWidth: 1, borderRadius: 5 }}>
            <Text>{item.name}</Text>
            <Text>Price: ${item.price.toFixed(2)}</Text>
            <Text>Quantity: {item.quantity}</Text>
            <Text>Subtotal: ${(item.price * item.quantity).toFixed(2)}</Text>
          </View>
        )}
      />
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>Total: ${total}</Text>
      <Text style={{ fontSize: 16, marginTop: 20, marginBottom: 20 }}>Payment Options</Text>
      <Button label="Confirm Order" onPress={confirmOrder} />
    </View>
  );
};

export default CheckoutScreen;
