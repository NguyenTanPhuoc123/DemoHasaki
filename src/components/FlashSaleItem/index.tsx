import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';
import {Image} from 'react-native-elements';
import {BLACK_COLOR} from '../../constants/color';

type FlashSaleItemProps = {
  id: number;
  title: string;
  price: number;
  priceSale?: number;
  image: string;
  discount: number;
};

const FlashSaleItem = (props: FlashSaleItemProps) => {
  const {title, price, priceSale = 0, image, discount} = props;
  const formatTitle = (title: string) => {
    if (title.length > 38) return title.substring(0, 38) + '...';
    return title;
  };
  const formatPrice = (price: number) => {
    const formatter = new Intl.NumberFormat('vn-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
    });

    return formatter.format(price);
  };
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.img} resizeMode="cover" />
      <View style={{flexDirection: 'row', margin: 3,justifyContent:'space-evenly',alignItems:'center'}}>
        <Text style={styles.priceSale}>{formatPrice(priceSale)}</Text>
        <Text style={styles.price}>{formatPrice(price)}</Text>
      </View>
      <Text style={styles.title}>{formatTitle(title)}</Text>
    </View>
  );
};

export default FlashSaleItem;
