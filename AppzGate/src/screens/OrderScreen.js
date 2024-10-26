import React from 'react';
import { View, FlatList } from 'react-native';
import ProductCard from '../components/ProductCard';
import globalStyles from '../styles/globalStyles';

const OrderScreen = () => {
  const products = [
    { id: '1', name: 'Product 1', price: 10.00, image: 'link-to-image' },
    // Add more product data
  ];

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard {...item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default OrderScreen;
