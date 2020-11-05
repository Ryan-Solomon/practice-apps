import React from 'react';

export default function CartContainer() {
  return (
    <section className='cart-container'>
      <h1>YOUR BAG</h1>
      <div className='cart-items-container'>CARTITEMS</div>
      <footer className='footer'>Total Amount</footer>
      <button className='btn-clear'>CLEAR CART</button>
    </section>
  );
}
