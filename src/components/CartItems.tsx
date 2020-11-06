import React from 'react';
import { useAppContext } from '../context/appContext';
import { CartItem as CartItemType } from '../types/types';
import CartItem from './CartItem';

export default function CartItems() {
  const { items } = useAppContext();

  const renderedItems = items.map((item: CartItemType) => (
    <CartItem key={item.id} item={item} />
  ));

  return <>{renderedItems}</>;
}
