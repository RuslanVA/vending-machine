import React, { Fragment } from 'react';

const ShoppingCartItem = ({ product }) => {
    const { title, price, id } = product;
    return (
        <Fragment>
            {title}
            <span className="badge badge-light badge-pill">Price: {price}</span>
        </Fragment>
    );
};

export default ShoppingCartItem;
