import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import styles from './productList.styled';
import useFetch from '../../hook/useFetch';
import { COLORS, SIZES } from '../../constants';
import ProductCardView from './ProductCardView';

const ProductList = () => {
  const { data, isLoading, error } = useFetch();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color={COLORS.primary} size={SIZES.xLarge} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => (<ProductCardView item={item} />)}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
    </View>
  );
};

export default ProductList;
