import React from 'react';
import { useState } from 'react';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <div className='search-bar-container'>
      <h3>Search Your Favorite Cocktail!</h3>
      <input
        onChange={(e) => setSearchInput(e.target.value)}
        type='text'
        placeholder='Search a cocktail'
        value={searchInput}
      />
    </div>
  );
};

export default SearchBar;
