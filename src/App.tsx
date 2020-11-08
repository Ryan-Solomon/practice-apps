import React from 'react';
import './App.css';
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import CocktailList from './components/CocktailList';
import { useAppContext } from './context/appContext';

const App = () => {
  const { error } = useAppContext()!;

  if (error) return <h1>Shit</h1>;

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
            <CocktailList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
