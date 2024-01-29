import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import styles from './heading.styled';
import { COLORS } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const Heading = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Rivals</Text>

        <TouchableOpacity onPress={() => navigation.navigate("ProductsList")}>
          <Ionicons name='ios-grid' size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Heading;