import React from 'react';
import './App.css';
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <div className='container'>
      <nav className='nav-bar'>
        <Nav />
      </nav>

      <div className='search-container'>
        <section className='search-bar'>
          <SearchBar />
        </section>
        <h3>Cocktails Title</h3>
        <main className='cocktail-container'>
          <div className='cocktail-item'>
            <h4>Cocktail Items</h4>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
