import React from 'react';
import ReactTooltip from 'react-tooltip';

const nutritionalValue = (props) => {
    return(
        <div className = 'nutrial-value'>
            <a className = 'nutrial-value__info' data-tip='' data-event='click focus'> </a>
            <ReactTooltip className = 'nutrial-value__tooltip' place="bottom" globalEventOff='click'>
                <ul className = 'nutrial-value__tooltip-list'>
                    <b>Пищевая ценность продукта на 100 г:</b>
                    <li>{`Калорийность ${props.nutritionalValue.energy}`}</li>
                    <li>{`Углеводы ${props.nutritionalValue.carbohydrates}`}</li>
                    <li>{`Протеины ${props.nutritionalValue.proteins}`}</li>
                    <li>{`Жиры ${props.nutritionalValue.fats}`}</li>
                    <li>{`Вес ${props.nutritionalValue.weight}`}</li>
                </ul>
            </ReactTooltip>
        </div>
    );
};

export default nutritionalValue;

// The functional component, a small tooltip, shows the composition of each of the products.