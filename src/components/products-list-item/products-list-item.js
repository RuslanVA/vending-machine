import React, { Fragment } from 'react';

const ProductsListItem = ({ product }) => {
    const { title, price, id } = product;
    return (
        <Fragment>
            <h4>{title}</h4>
            <p className="btn btn-secondary">Price: {price}</p>
        </Fragment>
    );
};

export default ProductsListItem;
