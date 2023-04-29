import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      flex:1,
      justifyContent:'center'
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      textAlign: 'center',
      flex:1,
      fontSize:18,
    },
    textHStyle: {
      fontWeight: 'bold',
      textAlign: 'center',
      flex:1,
      fontSize:18,
    },
    detail:{
      flexDirection:'row',
      marginBottom:10
    },
    closeBtn:{
      marginVertical:30
    }
});

export default styles;