import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Button from './Button';

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => (
  <View style={styles.container}>
    <Text style={styles.name}>{item.name}</Text>
    <Text>Price: ${item.price.toFixed(2)}</Text>
    <Text>Quantity: {item.quantity}</Text>

    <View style={styles.quantityControls}>
      <TouchableOpacity onPress={() => onDecrease(item.id)} style={styles.controlButton}>
        <Text>-</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onIncrease(item.id)} style={styles.controlButton}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>

    <Button label="Remove" onPress={() => onRemove(item.id)} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityControls: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  controlButton: {
    marginHorizontal: 10,
    padding: 5,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
});

export default CartItem;
