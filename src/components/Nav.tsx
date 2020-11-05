import React from 'react';
import { RiShoppingBagLine } from 'react-icons/ri';

export default function Nav() {
  return (
    <div className='nav'>
      <div className='title'>ReduxPractice</div>
      <div className='cart-icon-container'>
        <div className='cart-icon-count'>1</div>
        <div className='cart-icon-cart'>
          <RiShoppingBagLine />
        </div>
      </div>
    </div>
  );
}
