import React from 'react';
import SellingItem from './SellingItem/SellingItem';


const SellingItems = (props) => {
    function filter(input, currentPizza) {
        if (props.state.priceRange === 0) {
            return true;
        }
        if (currentPizza.price['25cm'] < props.state.priceRange) {
            return currentPizza.title.includes(input);
        }
    }

    return props.state.goods.map( (currentPizza) => {
        if (filter(props.state.searchInput, currentPizza)) {
            return (
                <div className = 'pizza-items'>
                    <SellingItem
                        key = {currentPizza.id}
                        img = {currentPizza.img}
                        size = {currentPizza.size}
                        type = {props.state.type}
                        title = {currentPizza.title}
                        price = {currentPizza.price}
                        consists = {currentPizza.consists}
                        addPizzaToCart = {props.addPizzaToCart}
                        availableSize = {currentPizza.availableSize}
                        nutritionalValue = {currentPizza.nutritionalValue} />  
                </div>
            )
        };
    });
};

export default SellingItems;