import React from "react";
import Slider from "react-slick";
import './SimpleSlider.css';
import slideOne from '../../../../assets/slider/slider-images/carbonara.jpg';
import slideTwo from '../../../../assets/slider/slider-images/footbal-pizza.jpg';
import slideThree from '../../../../assets/slider/slider-images/lucky-five.jpg';

class SimpleSlider extends React.Component {

  render() {

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoPlay: true
    };

    return (
      <Slider  className = 'main-slider' {...settings}>
          <img src = { slideOne } alt='offer-1' width='1160px' height='350px' />
          <img src = { slideTwo } alt='offer-1' width='1160px' height='350px' />
          <img src = { slideThree } alt='offer-1' width='1160px' height='350px' />
      </Slider>
    );
  }
}

export default SimpleSlider;