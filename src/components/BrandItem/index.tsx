import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style';

type BrandItemProps = {
    id:number;
    image:string;
    imageBrand:string;
}

const BrandItem = (props:BrandItemProps) => {
    const {image,imageBrand} = props;
  return (
    <View style={styles.container}>
      <Image source={{uri:image}} resizeMode='cover' style={styles.img} />
      <Image source={{uri:imageBrand}} resizeMode='cover' style={styles.imgBrand} />
    </View>
  )
}

export default BrandItem;