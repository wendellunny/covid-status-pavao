import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View,SafeAreaView } from 'react-native';
import {css} from './assets/css/css';
import Header from './components/header/header';
import Content from './components/content/content';
import Footer from './components/footer/footer';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  return (
    <LinearGradient
      colors={['#00081E','#00081E','#182B63']}
      style={css.container}
    >
      <StatusBar hidden/>
      <Header/>
      <Content/>
      </LinearGradient>
    
  );
}


