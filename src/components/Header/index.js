/*
https://blog.rocketseat.com.br/utilizando-fontes-de-icones-no-react-native/
https://ionicons.com/
yarn add react-native-vector-icons
react-native link

Solução para [X] - Os icons não são exibidos:
react-native link react-native-vector-icons
react-native run-android

*/

import React from 'react';

import {View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'; 

import styles from './styles';

const Header = () => (
    <View style={styles.container}>        
        <Icon name="ios-arrow-back" size={24} style={styles.icon} />
        <Text style={styles.title}>Profile</Text>
        <Icon name="ios-more" size={24} style={styles.icon} />
    </View>
);

export default Header;
