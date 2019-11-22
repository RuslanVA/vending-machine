import React, { Component } from 'react';
import ShoppingCartItem from '../shopping-cart-item/shopping-cart-item';

import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

const ShoppingCart = ({ products }) => {
    return (
        <ul className="container jumbotron list-group">
            {
                (products) ? products.map((product) => {
                    return (
                        <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" key={product.id}>
                            <ShoppingCartItem
                                product={product}/>
                        </li>
                    );
                })
                    : <p>Choose a product</p>
            }
        </ul>
    );
};

class ShoppingCartContainer extends Component {


    render() {
        const { products, loading, error } = this.props;


        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }
        return <ShoppingCart products={products}/>;
    }
}

export default ShoppingCartContainer;