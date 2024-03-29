import React from 'react';
import { View, ScrollView } from 'react-native';

import './config/ReactotronConfig';

import Header from './components/Header';
import SubHeader from './components/SubHeader';
import ProductList from './components/ProductList';
import Tabs from './components/Tabs';

const App = () => (
  <View style={{ flex: 1, backgroundcolor: '#F8F8FA' }}>
    <Header />
    <ScrollView>
      <SubHeader />
      <ProductList />
    </ScrollView>
    <Tabs />
  </View>
);

export default console.tron.overlay(App);