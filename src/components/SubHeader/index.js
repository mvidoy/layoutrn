import React from 'react';

import { View, Image, Text } from 'react-native';

import Button from '../Button';

import styles from './styles';

/*

Obs. Sempre que a direção do layout for alterada, é necessário a criação de uma nova
View, ou seja, quando se que alterar da vertival para a horizontal ou vice versa.

*/

const SubHeader = () => (
    <View style={styles.container}>
        <Image
            style={styles.avatar}
            source={{ uri: 'https://fthmb.tqn.com/DrRD0vrmFfmZyd41vHbMhUAoeLA=/768x0/filters:no_upscale()/GettyImages-545840549-58e7e5ca5f9b58ef7e53fc0f.jpg' }}
        />
        <View style={styles.profileInfo}>
            <Text style={styles.name}>Scarlett Johansson</Text>
            <Text style={styles.bio}>Editorial Director @sssense. Fashion addict & notorius shoe connossieur.</Text>

            <View style={styles.buttonContainer}>
                <Button style={styles.firstButton}>Message</Button>
                <Button type="outline">Follow</Button>
            </View>
        </View>
    </View>
);

export default SubHeader;
