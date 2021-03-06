import React, { Component } from 'react';
import NutritionalValue from './NutritionalValue';


import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import { addItemToCart, addPriceToCart } from '../../../../actions/index';

import styles from './SellingItem.css';

class SellingItem extends Component {

    state = {
        currentDisplayedImg: this.props.img['25cm'] || this.props.img['0.5l'] || this.props.img['combo'],
        currentPrice: this.props.price['25cm'] || this.props.price['0.5l'] ||  this.props.price['combo']
    };

    changeShowedImage = (size) => {
        this.setState({
            currentDisplayedImg: this.props.img[size],
            currentPrice: this.props.price[size]
        });
    };

    buttonSizeGood = (i) => (
        <button onClick={() => this.changeShowedImage(this.props.availableSize[i])}>{this.props.availableSize[i]}</button>    
    );

    addItemToCart = () => {
        this.props.addItemToCart();    
    };

    addPriceToCart = (price) => {
        this.props.addPriceToCart(price);  
    };

    addToCart = (price) => {
        this.props.addItemToCart();
        this.props.addPriceToCart(price);
    };

    render() {
        return ( 
            <div className = 'selling-item'>
                <section>
                    <h2 className = 'title'>{this.props.title}</h2>
                    <p className = 'consists' >{this.props.consists}</p>

                    { this.props.type === 'pizza' || this.props.type === 'drinks' ? (<div className = 'selling-item-buttons'> 
                        {this.buttonSizeGood(0)}
                        {this.buttonSizeGood(1)}
                        {this.buttonSizeGood(2)}
                    </div>) :[] }
                    
                    <div className = 'displayed-img'>
                        <img src = {this.state.currentDisplayedImg} alt='item' width = '300px' /> 
                    </div>

                    <NutritionalValue
                        nutritionalValue = {this.props.nutritionalValue} />
                        
                    <div className = 'bottom-wrapper'>
                        <span className = 'item-price'>
                            {`${this.state.currentPrice}`}
                        </span> 
                        <span 
                            className = 'item-price-rub'>
                            ₽
                        </span>
                        <button 
                            className = 'pizza-item-add-to-cart' 
                            onClick = {() => this.addToCart(this.state.currentPrice)}>
                            В корзину
                        </button>
                    </div> 
                </section>
            </div>
        );
    };
};

function mapStateToProps({ state, totalPrice }) {
    return { state, totalPrice };
}
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addItemToCart, addPriceToCart }, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(SellingItem);

// A generic class component that retrieves data from index.js. 
// The data itself is stored in a /store. Depending on the data received, 
// either pizza or drinks or combos. Also, the component interacts with the redux-store. 
// AddItToCard, AddPhrisCard add-on actions and change redux store via MapDispacProps method.