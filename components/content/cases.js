import React from 'react';
import {Text, View, Image } from 'react-native';
import {css} from '../../assets/css/css';
import {useFonts} from 'expo-font'
 
    

export default function Cases(props){
    let [fontsLoaded] = useFonts({
        'Quick-Sand':require('../../assets/fonts/Quicksand-Light.ttf')
      });
      if(!fontsLoaded){
          return(<View><Text>Carregando</Text></View>);
              
          
      }else{
        return(
            <View style={[css.items,css.itemCase]}>
                <View style={css.numberViewCases}>
                    <Text style={[css.numberContentCases]}>{props.numberCases}</Text>
                </View>
                <View style={css.textViewCases}>
                    <Text style={[css.textContentCases,{fontFamily:'Quick-Sand'}]}>Casos Confirmados</Text>
                </View>
                
                      
            </View>
        );
      }
    
}
