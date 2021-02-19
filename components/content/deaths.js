import React from 'react';
import {Text, View, Image } from 'react-native';
import {css} from '../../assets/css/css';
import {useFonts} from 'expo-font';

export default function Deaths(props){
    let [fontsLoaded] = useFonts({
        'Quick-Sand':require('../../assets/fonts/Quicksand-Light.ttf')
      });
      if(!fontsLoaded){
        return(<View><Text>Carregando</Text></View>);
            
        
    }else{
    return(
        <View style={[css.items,css.itemDeath]}>
            <View style={css.numberViewDeaths}>
                <Text style={css.numberContentDeaths}>{props.numberDeaths}</Text>
            </View>
           <View style={css.textViewDeaths}>
                <Text style={[css.textContentDeaths,{'fontFamily':'Quick-Sand'}]}>Óbitos Confirmados</Text>
           </View>
                 
        </View>
    );
    }
}
