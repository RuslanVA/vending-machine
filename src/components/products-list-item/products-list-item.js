import React, {Component} from 'react';

class ProductsListItem extends Component {
    constructor(){
        super();
        this.onAddItem = (e) => {
            this.props.onAddProduct(this.props.product);
        }
    }

    render(){
        const { title, price, id } = this.props.product;
        return (
            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" key={id} onClick={this.onAddItem}>
                {title}
                <span className="badge badge-light badge-pill">Price: {this.props.toPounds(price)}</span>
            </li>
        );
    }
}

export default ProductsListItem;
