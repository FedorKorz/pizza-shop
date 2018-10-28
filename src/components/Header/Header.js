import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './header.css';
import comboIcon from '../../assets/header/icons/combo.svg';
import pizzaIcon from '../../assets/header/icons/pizza.svg';
import drinksIcon from '../../assets/header/icons/drinks.svg';

const Header = (props) => {
    return (
        <header className = 'header'>
            <nav className = 'main-navigation'>
                <ul className = 'food-items'>
                    <li className = 'food-items-item'>
                        <img src = { pizzaIcon } alt='Пицца' width ='40px'/>
                        <Link to = "/">Пицца</Link>
                    </li>
                    <li className = 'food-items-item'>
                        <img src = { drinksIcon } alt='Напитики' height='40px' width ='30px'/>
                        <Link to = "drinks">Напитки</Link>
                    </li>
                    <li className = 'food-items-item'>
                        <img src = { comboIcon } alt='Комбо' width ='40px'/>
                        <Link to = "combo">Комбо</Link>
                    </li>
                </ul>
                <div className='cart'>
                    <span className='cart-items'>
                        {props.state}
                    </span>
                    <span className='cart-price'>
                        {props.totalPrice} ₽ 
                    </span>        
                </div>
            </nav>
        </header>
    );
};

function mapStateToProps({ state, totalPrice }) {
    return { state, totalPrice };
}
  
export default connect(mapStateToProps)(CSSModules(Header, styles));
