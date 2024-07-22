import {StyleSheet} from 'react-native';
import {BLACK_COLOR, WHITE_COLOR} from '../../constants/color';

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 160,
    marginLeft: 12,
    borderRadius: 20,
    justifyContent: 'flex-end',
    borderWidth: 1,
    borderColor: '#eee',
  },
  name: {
    textAlign: 'center',
    color: BLACK_COLOR,
    fontSize: 16,
    fontWeight: '500',
  },
  countSell: {
    textAlign: 'center',
    color: BLACK_COLOR,
    fontSize: 16,
  },
});

export default styles;
