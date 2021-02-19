import React from 'react';
import {Text, View, Image } from 'react-native';
import {css} from '../../assets/css/css';
import {useFonts} from 'expo-font';

export default function Header(){
    let [fontsLoaded] = useFonts({
        'Quick-Sand':require('../../assets/fonts/Quicksand-Light.ttf')
      });
      if(!fontsLoaded){
        return(<View><Text>Carregando</Text></View>);
            
        
    }else{
        return(
        
            <View style={css.header}>
                <Image style = {css.covidImg}source={require("../../assets/header/covid.gif")}/>
                <View style = {css.textsHeader}>
                    <Text style = {[css.covidText,{fontFamily:'Quick-Sand'}]}>COVID-19</Text>
                    <Text style = {[css.casosText,{fontFamily:'Quick-Sand'}]}>Casos Pavão - MG</Text>
                
                </View>
            
            
            </View>
        );
    }

}