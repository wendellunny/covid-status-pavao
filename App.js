import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View,SafeAreaView } from 'react-native';
import {css} from './assets/css/css';
import Header from './components/header/header';


export default function App() {
  return (
    <SafeAreaView style={css.container}>
      <StatusBar hidden/>
      <Header/>
    </SafeAreaView>
  );
}


