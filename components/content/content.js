import React, {useState,useEffect} from 'react';
import {Text, View, Image } from 'react-native';
import {css} from '../../assets/css/css';
import Cases from './cases';
import Deaths from './deaths';
import axios from 'axios';


export default function Content(){
const[numberCases,setNumberCases]=useState('1');
const[numberDeaths,setNumberDeaths]=useState('0');
// Make a request for a user with a given ID
const token = '04eb391da183621a62a63d58cf3652752232d2a3';
axios.get('https://api.brasil.io/v1/dataset/covid19/caso/data/?city_ibge_code=3148509&format=json&is_last=True',{
    headers:{
        'Authorization':'Token '+ token
    }
})
  .then(function (response) {
    setNumberCases(response.data.results[0].confirmed);
    setNumberDeaths(response.data.results[0].deaths);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  return(
    <View style={css.content}>
        <Cases numberCases={numberCases}/>
        <Deaths numberDeaths={numberDeaths}/>
    </View>
);
  
    


}