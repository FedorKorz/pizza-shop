import React from 'react';

const RangeSlider = (props) => {
    return (
        <div className="range-slider">
            <input className="range-slider__input"
                name="quantity"
                type="range" 
                min="1" 
                max="1000" 
                step="10" 
                value={props.priceRange}  
                onChange={props.shifted} 
            />
        </div>
    ); 
}

export default RangeSlider;
