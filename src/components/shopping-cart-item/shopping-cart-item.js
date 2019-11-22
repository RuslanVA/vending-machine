import React from 'react';

const ShoppingCartItem = ({ product, quantities, toPounds }) => {
    const { title, price, id } = product;
    return (
        <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" key={id}>
            {title}
            <span className="btn btn-secondary disabled">Price: {toPounds(price)}</span>
            <span className="btn btn-danger disabled">{quantities[id]}</span>
        </li>
    );
};

export default ShoppingCartItem;
