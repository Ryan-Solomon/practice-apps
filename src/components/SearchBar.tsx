import React from 'react';
import { useState } from 'react';
import { useAppContext } from '../context/appContext';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useAppContext();

  return (
    <div className='search-bar-container'>
      <h3>Search Your Favorite Cocktail!</h3>
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        type='text'
        placeholder='Search a cocktail'
        value={searchTerm}
      />
    </div>
  );
};

export default SearchBar;
