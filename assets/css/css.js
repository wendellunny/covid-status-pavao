
import { StyleSheet} from 'react-native';


const css = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#00081E',
      height:'100%',
      width:'100%'
      
    },
    header:{
        marginTop:90,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    covidImg:{
        width:140,
        height:110,
    },
    covidText:{
        color:'#fff',
        fontSize:25
    },
    casosText:{
        color:'#fff',
        fontSize:15
    },
    textsHeader:{
        paddingBottom:10,
        borderBottomColor:'#fff',
        borderBottomWidth:1,
        width:'40%'
    }
  });


  export {css};