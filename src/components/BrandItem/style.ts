import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width:180,
        height:180,
        borderRadius:20,
        marginLeft:8
    },
    img:{
        width:'100%',
        height:'100%',
        borderRadius:20
    },
    imgBrand:{
        width:'80%',
        height:50,
        alignSelf:'center',
        zIndex:9999,
        position:'absolute',
        bottom:10,
        borderRadius:10
    }
});

export default styles;