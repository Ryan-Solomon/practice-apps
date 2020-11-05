import React from 'react';
import './App.css';
import Nav from './components/Nav';
import CartContainer from './components/CartContainer';

function App() {
  return (
    <div className='container'>
      <Nav />
      <CartContainer />
    </div>
  );
}

export default App;
