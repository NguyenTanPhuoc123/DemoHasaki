import {StyleSheet} from 'react-native';
import {WITDH} from '../../style';
import {
  BLACK_COLOR,
  ORANGE_COLOR_TEXT,
  WHITE_COLOR,
} from '../../constants/color';

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 300,
    backgroundColor: WHITE_COLOR,
    marginLeft: 10,
    marginVertical: 10,
    borderRadius: 15,
  },
  img: {
    width: '100%',
    height: 220,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  title: {fontSize: 16, textAlign: 'center', color: BLACK_COLOR},
  price: {
    fontSize: 12,
    color: BLACK_COLOR,
    fontWeight: '400',
    textDecorationLine:'line-through',
    alignSelf:'flex-end'
  },
  priceSale: {
    fontSize: 16,
    color: ORANGE_COLOR_TEXT,
    fontWeight: '500',
  },
});

export default styles;
