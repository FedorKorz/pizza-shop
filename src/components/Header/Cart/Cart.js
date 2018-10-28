import React , { Component } from 'react';

class Cart extends Component {

    state = {
        cartStatus: 0,
        totalPrice: 0
    };

    updateState = (price) => {
        this.setState({
            cartStatus: ++this.state.cartStatus,
            totalPrice: this.state.totalPrice + price
        });
    };

    cleerCart = () => {
        this.setState({
            cartStatus: 0,
            totalPrice: 0
        });
    };

    checkProps = () => {
        console.log(this.props);
    };

    render() {
        return (
            <div className='cart'>
                <span className='cart__items'>{this.state.cartStatus}</span>
                <span className='cart__price'>{this.state.totalPrice} ₽ </span>
                {/* <button className='cart__button' onClick={this.cleerCart}>Очистить корзину</button> */}
            </div>
        );
    };
}

export default Cart;