import React from 'react';
import { useAppContext } from '../context/appContext';
import { CartItem as CartItemType } from '../types/types';

type Props = {
  key: string;
  item: CartItemType;
};

export default function CartItem({ item }: Props) {
  const { title, price, img } = item;
  const { removeProduct } = useAppContext();

  return (
    <div className='cart-item-container'>
      <div className='cart-item-img'>
        <img src={img} alt={title} />
      </div>
      <div className='item-details'>
        <h4>{title}</h4>
        <h5>{price}</h5>
        <button onClick={() => removeProduct(item)}>remove</button>
      </div>
    </div>
  );
}
