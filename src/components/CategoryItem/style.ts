import { StyleSheet } from "react-native";
import { BLACK_COLOR, GREY_COLOR } from "../../constants/color";

const styles = StyleSheet.create({
    container:{
        backgroundColor:GREY_COLOR,
        width:100,
        height:'auto',
        borderRadius:15,
        marginLeft:5,
        marginTop:5
    },
    title:{
        textAlign:'center',
        color:BLACK_COLOR,
        marginHorizontal:5
    },
    img:{
        width:'90%',
        height:100,
        alignSelf:'center',
        marginVertical:5,
        borderRadius:10
    }
});

export default styles;