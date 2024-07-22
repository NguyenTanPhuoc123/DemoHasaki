import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './style';

type CategoryItemProps = {
    id:number;
    title:string;
    image:string;
}

const CategoryItem = (props:CategoryItemProps) => {
    const {title,image} = props;
  return (
    <TouchableOpacity style={styles.container}>
        <Image source={{uri:image}} resizeMode='cover' style={styles.img} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryItem;