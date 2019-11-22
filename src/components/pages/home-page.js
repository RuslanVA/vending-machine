import React, {Component, Fragment} from 'react';
import ProductsList from '../products-list/products-list';
import ShoppingCart from "../shopping-cart/shopping-cart";
import Receiver from "../receiver/receiver";
import ProductsWindow from "../products-window/products-window";
import ChangeWindow from "../change-window/change-window";

import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

class HomePage extends Component {

    constructor(){
        super();
        this.state = {
            products: [],
            quantities: {},
            totalQuantities: [],
            totalPrice: 0,
            insertedMoney: 0,
            status: '',
            windowProducts: '',
            windowQuantities: {},
            change: 0,
            error: false
        };

        this.notify = (msg) => {
            toast(msg)
        };

        this.toPounds = (val) => {
            let pounds = val / 100;
            pounds = pounds.toLocaleString("en-GB", {style:"currency", currency:"GBP"});
            return pounds;
        };

        this.getChange = (amount) => {
            let denominations = [1, 2, 5, 10, 20, 50, 100, 200];
            let result = [];
            while (amount > 0) {
                let coin = denominations.pop();
                let count = Math.floor(amount/coin);
                amount -= count * coin;
                if (count) result.push([coin/100, count]);
            }
            return result;
        };

        this.onAddProduct = (product) => {
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
            this.notify(`You add ${product.title}`);
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
                this.notify(`Insert more money!`);
            } else if (this.state.insertedMoney === this.state.totalPrice) {
                let productsQuantities = this.state.products;
                productsQuantities.map((product) => {
                    if (this.state.quantities[product.id] > product.quantity) {
                        this.setState({
                            status: `There are not enough products. Number of ${product.title} remaining: ${product.quantity}`,
                            error: true
                        });
                    } else {
                        product.quantity -= this.state.quantities[product.id];
                        this.setState({
                            windowProducts: this.state.products,
                            windowQuantities: this.state.quantities,
                            products: [],
                            quantities: [],
                            totalPrice: 0,
                            insertedMoney: 0,
                            status: "SUCCESS! Take your products!"
                        });
                    }
                    return product;
                });
                this.notify(`SUCCESS! Take your products!`);
            } else {
                let change = this.state.insertedMoney - this.state.totalPrice;
                let productsQuantities = this.state.products;
                productsQuantities.map((product) => {
                    if (this.state.quantities[product.id] > product.quantity) {
                        this.setState({
                            status: `There are not enough products. Number of ${product.title} remaining: ${product.quantity}`,
                            error: true
                        });
                        this.notify(`There are not enough products. Number of ${product.title} remaining: ${product.quantity}`);
                    } else {
                        product.quantity -= this.state.quantities[product.id];
                        this.setState({
                            insertedMoney: 0,
                            windowProducts: this.state.products,
                            windowQuantities: this.state.quantities,
                            products: [],
                            quantities: [],
                            totalPrice: 0,
                            change: change,
                            status: 'SUCCESS! Take your products and your change!'
                        });
                        this.notify(`SUCCESS! Take your products and your change!`);
                    }
                    return product;
                });
            }
        };

        this.onClear = () => {
            this.setState({
                products: [],
                quantities: [],
                totalPrice: 0,
                error: false,
                status: "Choose some products!"});
            this.notify(`Shopping cart is clear!`);
        };

        this.onReload = () => {
            this.setState({
                products: [],
                quantities: {},
                totalQuantities: [],
                totalPrice: 0,
                insertedMoney: 0,
                status: '',
                windowProducts: '',
                windowQuantities: {},
                change: 0,
                error: false
            });
            this.notify(`Vending machine is reloaded!`);
        };
    }

    render(){
        return (
            <Fragment>
                <ProductsList
                onAddProduct={this.onAddProduct}
                toPounds={this.toPounds}
                />
                <ShoppingCart
                    products={this.state.products}
                    quantities={this.state.quantities}
                    totalPrice={this.state.totalPrice}
                    status={this.state.status}
                    insertedMoney={this.state.insertedMoney}
                    onBuy={this.onBuy}
                    onClear={this.onClear}
                    onReload={this.onReload}
                    toPounds={this.toPounds}
                    notify={this.notify}
                />
                <Receiver
                onMoneyCheck={this.onMoneyCheck}
                notify={this.notify}
                toPounds={this.toPounds}
                />
                <ProductsWindow
                windowProducts={this.state.windowProducts}
                windowQuantities={this.state.windowQuantities}/>
                <ChangeWindow
                change={this.state.change}
                toPounds={this.toPounds}
                getChange={this.getChange}
                />
                <ToastContainer />
            </Fragment>
        );
    }
}

export default HomePage;
