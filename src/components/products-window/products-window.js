import React, { Component, Fragment } from 'react';
import ProductsWindowItem from '../products-window-item/products-window-item';

import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

const ProductsWindow = ({ windowProducts, windowQuantities }) => {
    return (
        <Fragment>
            <h3 className="container">Take your products!</h3>
            <ul className="container jumbotron list-group">
                {
                    (windowProducts) ? windowProducts.map((product) => {
                            return (
                                <ProductsWindowItem
                                    product={product}
                                    key={product.id}
                                    quantities={windowQuantities}/>
                            );
                        })
                        : <span>Buy a product!</span>
                }
            </ul>
        </Fragment>
    );
};

class ProductsWindowContainer extends Component {


    render() {
        const { loading, error, windowQuantities, windowProducts } = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }
        return <ProductsWindow
            windowProducts={windowProducts}
            windowQuantities={windowQuantities}
        />;
    }
}

export default ProductsWindowContainer;