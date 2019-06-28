import React, { Component } from 'react';

import { View } from 'react-native';

import Product from './Product';

import styles from './styles';

export default class index extends Component {
    state = {
        products: [
            {
                id: 1,
                image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
                title: 'Acne Studios',
                description: 'Andrea nappa dusty pink',
                price: 'R$50,00',
            },
            {
                id: 2,
                image: 'https://www.passarela.com.br/ccstore/v1/images/?source=/file/collections/content_calcados-femininos-sapato.jpg&height=410&width=410',
                title: 'Acne Studios',
                description: 'Lain pop sky blue',
                price: 'R$70,00',
            },
            {
                id: 3,
                image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
                title: 'Acne Studios',
                description: 'Andrea nappa dusty pink',
                price: 'R$30,00',
            },
            {
                id: 4,
                image: 'https://www.passarela.com.br/ccstore/v1/images/?source=/file/collections/content_calcados-femininos-sapato.jpg&height=410&width=410',
                title: 'Acne Studios',
                description: 'Lain pop sky blue',
                price: 'R$70,00',
            },
            {
                id: 5,
                image: 'https://www.passarela.com.br/ccstore/v1/images/?source=/file/collections/content_calcados-femininos-sapato.jpg&height=410&width=410',
                title: 'Acne Studios',
                description: 'Andrea nappa dusty pink',
                price: 'R$30,00',
            },
            {
                id: 6,
                image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
                title: 'Acne Studios',
                description: 'Lain pop sky blue',
                price: 'R$70,00',
            }
        ],
    }; 

    render() {
        return (
            <View style={styles.container}>
                {this.state.products.map(product => 
                <Product key={product.id} product={product} />)}
            </View>
        );
    }
}