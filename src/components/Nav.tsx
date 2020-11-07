import { time } from 'console';
import React from 'react';
import { RiShoppingBagLine } from 'react-icons/ri';
import { useAppContext } from '../context/appContext';
import { CartItem } from '../types/types';

export default function Nav() {
  const { items } = useAppContext();
  const totalCount = items.reduce(
    (acc: number, item: CartItem) => acc + item.amount,
    0
  );

  return (
    <div className='nav'>
      <div className='title'>ReduxPractice</div>
      <div className='cart-icon-container'>
        <div className='cart-icon-count'>{totalCount}</div>
        <div className='cart-icon-cart'>
          <RiShoppingBagLine />
        </div>
      </div>
    </div>
  );
}
