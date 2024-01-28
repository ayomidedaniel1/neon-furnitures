import { FlatList, Text, View } from 'react-native';
import React from 'react';
import styles from './productRow.styled';
import { SIZES } from '../../constants';
import ProductCardView from './ProductCardView';

const ProductRow = () => {
  const products = [1, 2, 4, 6];

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCardView />}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
    </View>
  );
};

export default ProductRow;
