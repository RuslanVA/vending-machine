import React, { Component } from 'react';
import ProductsListItem from '../products-list-item/products-list-item';

import { connect } from 'react-redux';

import withService from '../hoc/with-service';
import { fetchProducts } from '../../store/actions';
import compose from '../../utils/compose';

import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

class ProductsList extends Component{

    render(){
        return (
            <ul className="container list-group">
                {
                    this.props.products.map((product) => {
                        return (
                            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" key={product.id}>
                                <ProductsListItem
                                    product={product}/>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }

}

class ProductsListContainer extends Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        const { products, loading, error } = this.props;


        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }
        return <ProductsList
            products={products}
        />;
    }
}

const mapStateToProps = ({ productsList: { products, loading, error }}) => {
    return { products, loading, error };
};

const mapDispatchToProps = (dispatch, { productsService }) => {

    return {
        fetchProducts: fetchProducts(productsService, dispatch)
    };
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ProductsListContainer);
