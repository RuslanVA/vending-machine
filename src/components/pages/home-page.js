import React, {Component, Fragment} from 'react';
import ProductsList from '../products-list/products-list';
import ShoppingCartContainer from "../shopping-cart/shopping-cart";

class HomePage extends Component {

    state = {
        products: []
    };

    render(){
        return (
            <Fragment>
                <ProductsList />
                <ShoppingCartContainer />
            </Fragment>
        );
    }
}

export default HomePage;
