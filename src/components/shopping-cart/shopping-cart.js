import React, { Component } from 'react';
import ShoppingCartItem from '../shopping-cart-item/shopping-cart-item';

import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

const ShoppingCart = ({ products, quantities, totalPrice, insertedMoney, status, onBuy, onClear, onReload, toPounds }) => {

    return (
        <div className="container jumbotron">
            <h3>Shopping cart</h3>
            <ul className="list-group">
                {
                    (products) ? products.map((product) => {
                            return (
                                <ShoppingCartItem
                                    product={product}
                                    key={product.id}
                                    quantities={quantities}
                                    toPounds={toPounds}
                                />
                            );
                        })
                        : <p>Choose a product</p>
                }
            </ul>
            <p className="btn btn-success disabled">Total price: {toPounds(totalPrice)}</p>
            <p className="btn btn-warning disabled">Inserted money: {toPounds(insertedMoney)}</p>
            <p className="btn btn-danger" onClick={onBuy}>Buy products</p>
            <p className="btn btn-outline-danger" onClick={onClear}>Clear my shopping cart</p>
            <p className="btn btn-outline-info" onClick={onReload}>Reload</p>
            <p className="text-success">{status}</p>
        </div>
    );
};

class ShoppingCartContainer extends Component {


    render() {
        const { products, loading, error, quantities, totalPrice, status, insertedMoney, onBuy, onClear, onReload, toPounds } = this.props;


        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }
        return <ShoppingCart
            products={products}
            quantities={quantities}
            totalPrice={totalPrice}
            insertedMoney={insertedMoney}
            onBuy={onBuy}
            onClear={onClear}
            onReload={onReload}
            toPounds={toPounds}
            status={status}
        />;
    }
}

export default ShoppingCartContainer;