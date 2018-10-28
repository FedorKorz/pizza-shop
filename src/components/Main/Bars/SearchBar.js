import React from 'react';
import styles from './search-bar.css';

const SearchBar = (props) => {
    return (
        <div className='search-bar'>
            <form>
                <input
                    type="text"
                    placeholder='Введите название пиццы' 
                    value={props.searchInput} 
                    onChange={props.changed} />
            </form>
        </div>
    );
} 

export default SearchBar;

// The functional component displays pizzas, depending on the data received from the user