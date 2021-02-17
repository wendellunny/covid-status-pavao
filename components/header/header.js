import React from 'react';
import {Text, View, Image } from 'react-native';
import {css} from '../../assets/css/css';

export default function Header(){
    return(
        <View style={css.header}>
            <Image style = {css.covidImg}source={require("../../assets/header/covid.gif")}/>
            <View style = {css.textsHeader}>
                <Text style = {css.covidText}>COVID-19</Text>
                <Text style = {css.casosText}>Casos Pavão - MG</Text>
                
            </View>
            
            
        </View>
    );

}