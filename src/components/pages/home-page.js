import React, {Component, Fragment} from 'react';
import ProductsList from '../products-list/products-list';
import ShoppingCart from "../shopping-cart/shopping-cart";
import Receiver from "../receiver/receiver";
import ProductsWindow from "../products-window/products-window";
import ChangeWindow from "../change-window/change-window";

class HomePage extends Component {

    constructor(){
        super();
        this.state = {
            products: [],
            quantities: {},
            totalPrice: 0,
            insertedMoney: 0,
            status: '',
            windowProducts: '',
            windowQuantities: {},
            change: 0

        };

        this.onAddProduct = (product) => {
            console.log('added', product);
            this.setState(state => {
                if (this.state.quantities.hasOwnProperty(product.id)) {
                    let id = product.id;
                    let quantities = state.quantities;
                    quantities[id] += 1;
                    let totalPrice = state.totalPrice;
                    totalPrice += product.price;
                    return {
                        quantities,
                        totalPrice
                    }
                } else {
                    const products = state.products.concat(product);
                    let id = product.id;
                    let quantities = state.quantities;
                    quantities[id] = 1;
                    let totalPrice = state.totalPrice;
                    totalPrice += product.price;
                    return {
                        products,
                        quantities,
                        totalPrice
                    }
                }
            });
            console.log('state', this.state);
        };

        this.onMoneyCheck = (money) => {
            this.setState(state => {
                let insertedMoney = Number(this.state.insertedMoney);
                insertedMoney += Number(money);
                return {
                    insertedMoney
                }
            })
        };

        this.onBuy = () => {
            if(this.state.insertedMoney < this.state.totalPrice) {
                this.setState({status: 'Insert more money!'})
            } else if (this.state.insertedMoney === this.state.totalPrice) {
            this.setState({
                windowProducts: this.state.products,
                windowQuantities: this.state.quantities,
                products: [],
                quantities: [],
                totalPrice: 0,
                insertedMoney: 0,
                status: "SUCCESS! Take your products!"
            });
            } else {
                let change = this.state.insertedMoney - this.state.totalPrice;
                this.setState({
                    insertedMoney: 0,
                    windowProducts: this.state.products,
                    windowQuantities: this.state.quantities,
                    products: [],
                    quantities: [],
                    totalPrice: 0,
                    change: change,
                    status: 'SUCCESS! Take your products and your change!'
                })
            }
        };

        this.onClear = () => {
            this.setState({products: [],
                quantities: [],
                totalPrice: 0,
                status: "Choose some products!"});
        }
    }

    render(){
        return (
            <Fragment>
                <ProductsList
                onAddProduct={this.onAddProduct}/>
                <ShoppingCart
                    products={this.state.products}
                    quantities={this.state.quantities}
                    totalPrice={this.state.totalPrice}
                    status={this.state.status}
                    insertedMoney={this.state.insertedMoney}
                    onBuy={this.onBuy}
                    onClear={this.onClear}
                />
                <Receiver
                onMoneyCheck={this.onMoneyCheck}
                />
                <ProductsWindow
                windowProducts={this.state.windowProducts}
                windowQuantities={this.state.windowQuantities}/>
                <ChangeWindow
                change={this.state.change}
                />
            </Fragment>
        );
    }
}

export default HomePage;
