import React from 'react';
import { useState } from 'react';
import { useAppContext } from '../context/appContext';

const SearchBar = () => {
  const { searchInput, setSearchInput } = useAppContext()!;

  return (
    <div className='search-bar-container'>
      <h3>Search Your Favorite Cocktail!</h3>
      <input
        onChange={(e) => setSearchInput(e.target.value)}
        type='text'
        placeholder='Search a cocktail'
        // value={searchInput}
      />
    </div>
  );
};

export default SearchBar;
