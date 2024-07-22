import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import styles from './style';

type SellingItemProps = {
  id: number;
  name: string;
  image: string;
  count: string;
};

const SellingItem = (props: SellingItemProps) => {
  const {image, count, name} = props;
  return (
    <ImageBackground
      source={{uri: image}}
      resizeMode="cover"
      style={styles.container}>
      <Text style={styles.countSell}>{count}</Text>
      <Text style={styles.name}>{name}</Text>
    </ImageBackground>
  );
};

export default SellingItem;
