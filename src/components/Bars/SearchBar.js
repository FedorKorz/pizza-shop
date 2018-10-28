import React from 'react';

const SearchBar = (props) => {
    return (
        <div className='SearchBar'>
            <form>
                <input type="text" value={props.searchInput} onChange={props.changed} />
            </form>
        </div>);
} 

export default SearchBar;