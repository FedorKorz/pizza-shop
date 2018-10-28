import React , { Component } from 'react';
import styles from './Cart.css';

class Cart extends Component {
    state = {
        cartTitle: 'Корзина',
        cartStatus: 0
    }

    updateState = () => {
        this.setState({
            cartStatus: ++this.state.cartStatus
        });
    }

    clertCart = () => {
        this.setState({
            cartStatus: 0
        });
    }

    render() {
        return(
            <div className={styles.Cart}>
                <h3>{this.state.cartTitle}</h3>
                <span>{this.state.cartStatus}</span>
                <button onClick={this.clertCart}>Очистить корзину</button>
            </div>
        );
    }
}

export default Cart;

//The class component displays the number of items purchased, as well as the sum of all purchases.