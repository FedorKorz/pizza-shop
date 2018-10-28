import React from 'react';

const SearchBar = (props) => {
    return (
        <div className='search-bar'>
            <form>
                <input
                    type="text"
                    placeholder='Введите название пиццы' 
                    value={props.searchInput} 
                    onChange={props.changed} 
                />
            </form>
        </div>
    );
} 

export default SearchBar;