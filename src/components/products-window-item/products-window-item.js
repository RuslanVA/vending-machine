import React from 'react';

const ProductsWindowItem = ({ product, quantities }) => {
    const { title, id } = product;

    return (
        <li className="list-group-item list-group-item d-flex justify-content-between align-items-center" key={id}>
            {title}
            <span className="btn btn-danger disabled">{quantities[id]}</span>
        </li>
    );
};

export default ProductsWindowItem;
