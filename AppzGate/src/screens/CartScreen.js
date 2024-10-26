import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import globalStyles from '../styles/globalStyles';
import Button from '../components/Button';
import CartItem from '../components/CartItem';

const CartScreen = ({ navigation }) => {
  // Sample cart items data
  const [cartItems, setCartItems] = useState([
    { id: '1', name: 'Product 1', price: 10.00, quantity: 1 },
    { id: '2', name: 'Product 2', price: 20.00, quantity: 2 },
  ]);

  // Function to update quantity based on item ID and action type
  const updateQuantity = (id, type) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: type === 'increase' ? item.quantity + 1 : Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  // Function to remove an item from the cart
  const removeItem = id => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Function to calculate the total price
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  // Navigate to CheckoutScreen with cart items and total price
  const proceedToCheckout = () => {
    navigation.navigate('Checkout', { cartItems, total: calculateTotal() });
  };

  return (
    <View style={globalStyles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Your Cart</Text>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CartItem
            item={item}
            onIncrease={(id) => updateQuantity(id, 'increase')}
            onDecrease={(id) => updateQuantity(id, 'decrease')}
            onRemove={removeItem}
          />
        )}
      />
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>Total: ${calculateTotal()}</Text>
      <Button label="Proceed to Checkout" onPress={proceedToCheckout} />
    </View>
  );
};

export default CartScreen;
