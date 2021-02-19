
import { StyleSheet} from 'react-native';



const css = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      height:'100%',
      width:'100%'
      
    },
    header:{
        flex:0.2,
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
        color:'#E1E1E1',
        fontSize:25
    },
    casosText:{
        color:'#E1E1E1',
        fontSize:15
    },
    textsHeader:{
        paddingBottom:10,
        paddingTop:10,
        
        
        width:'40%'
    },

    numberContentCases:{
        borderBottomWidth:1,
        borderBottomColor:'#fff',
        borderRightColor:'#fff',
        borderRightWidth:1,
        paddingLeft:25,
        paddingRight:25,
        color:'#fff',
        fontSize:50

    },
    numberContentDeaths:{
        borderBottomColor:'#FF1966',
        borderBottomWidth:1,
        borderRightColor:'#FF1966',
        borderRightWidth:1,
        paddingLeft:25,
        paddingRight:25,
        color:'#FF1966',
        fontSize:55,

    },
    textContentCases:{
        
        marginBottom:5,
        paddingLeft:15,
        color:'#fff',
        fontSize:20
    },
    textContentDeaths:{
        marginBottom:5,
        paddingLeft:15,
        color:'#fff',
        fontSize:20
    },
    content:{
        
        marginTop:100,
        flexDirection:'column',
        flex:0.65
      
    },
    items:{
        flexDirection:'row',
        width:'100%'

    },
    itemCase:{
        
        justifyContent:'flex-start'
    },
    itemDeath:{
        marginTop:100,
        justifyContent:'flex-end'
    },
    textViewCases:{
        justifyContent:'flex-end',
        width:'58%',
        borderBottomWidth:1,
        borderBottomColor:'#fff'
    },
    textViewDeaths:{
        justifyContent:'flex-end',
        width:'58%',
        borderBottomWidth:1,
        borderBottomColor:'#FF1966',

    },
    numberViewCases:{
        justifyContent:'flex-end'
    },
    numberViewDeaths:{
        justifyContent:'flex-end'
    },


    footer:{
        flex:0.30,
        backgroundColor:"#fff"
    }
  });


  export {css};