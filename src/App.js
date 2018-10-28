import MainSlider from './components/Main/Sliders/MainSlider/SimpleSlider';
import RangeSlider from './components/Main/Sliders/RangeSlider';
import SellingItems from './components/Main/Goods/SellingItems';
import PizzaState from './store/pizza-state/pizza-state';
import SearchBar from './components/Main/Bars/SearchBar';
import React, { Component } from 'react';

class App extends Component {

  state = PizzaState();

  inputChangeHandler = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  rangeSliderHandler = (event) => {
    this.setState({ priceRange: event.target.value });
  };

  addPizzaToCart = (price) => {
    this.cart.updateState(price);
  };

  render() {
    return (
      <div>
        <MainSlider />
        <SearchBar
          changed = { this.inputChangeHandler }
          addPizzaToCart = { this.addItemHandler } 
          searchInput = { this.state.searchInput }/>  
        <RangeSlider 
          currentPrice = { this.priceRange }
          shifted = { this.rangeSliderHandler }/>  
        <div className = 'container'>
          <SellingItems
          state = { this.state}
          addPizzaToCart = { this.addPizzaToCart }/>  
        </div>
      </div>
    );
  }
}

export default App;
