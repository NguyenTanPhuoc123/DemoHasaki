import {Dimensions, StyleSheet} from 'react-native';
import {GREEN_COLOR, ORANGE_COLOR_BG, WHITE_COLOR} from './constants/color';

export const WITDH = Dimensions.get('screen').width;
export const HEIGHT = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  headerContainer: {
    borderColor: GREEN_COLOR,
    width: WITDH,
  },
  leftComponent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  containerSearch: {
    flexDirection: 'row',
    width: WITDH / 3 + 20,
    height: 30,
    backgroundColor: WHITE_COLOR,
    alignItems: 'center',
    borderRadius: 15,
    marginHorizontal: 10,
  },
  search: {
    backgroundColor: 'transparent',
    width: '85%',
    height: 30,
    borderRadius: 15,
    marginLeft: 15,
    fontSize: 12,
    padding: 7,
  },
  iconSearch: {
    position: 'absolute',
    left: 5,
    zIndex: 99999,
  },
  iconBtnHeader: {
    margin: 10,
  },
  optionsContainer: {
    backgroundColor: GREEN_COLOR,
    width: '100%',
    height: 300,
    alignItems: 'center',
  },
  optionItemContainer: {
    width: WITDH / 6,
    alignItems: 'center',
    margin: 5,
  },
  flashSaleContainer: {
    width: '100%',
    height: 'auto',
    backgroundColor: ORANGE_COLOR_BG,
  },
  headFlashSale:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  category:{
    width:'100%',
    height:'auto',
    backgroundColor:WHITE_COLOR,
    marginVertical:10,
    paddingVertical:5
  },
  brand:{
    width:'100%',
    height:230,
    backgroundColor:WHITE_COLOR,
    marginVertical:5,
    paddingVertical:5
  },
  selling:{
    width:'100%',
    height:230,
    backgroundColor:WHITE_COLOR,
    marginVertical:5,
    paddingVertical:5
  },
  btnChat:{
    width:50,
    height:50,
    borderRadius:25,
    position:'absolute',
    bottom:30,
    right:5,
    backgroundColor:GREEN_COLOR,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default styles;
