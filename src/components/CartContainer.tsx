import React from 'react';
import { useAppContext } from '../context/appContext';
import CartItems from './CartItems';
import { CartItem as CartItemType } from '../types/types';

export default function CartContainer() {
  const { items } = useAppContext();
  const totalPrice = items.reduce((acc: number, item: CartItemType) => {
    acc += JSON.parse(item.price);
    return acc;
  }, 0);

  return (
    <section className='cart-container'>
      <h1>YOUR BAG</h1>
      <div className='cart-items-container'>
        <CartItems />
      </div>
      <footer className='footer'>Total Amount: ${totalPrice}</footer>
      <button className='btn-clear'>CLEAR CART</button>
    </section>
  );
}
