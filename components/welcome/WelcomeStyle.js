import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container:{
        marginTop:50,
        paddingTop:20,
        flex:1,
    },
    header:{
        textAlign:'center',
        fontSize:25,
    },
    subHeader:{
        fontSize:15,
        textAlign:'center'
    }
})

export default styles;