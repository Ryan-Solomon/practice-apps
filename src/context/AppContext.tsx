import React, { useEffect, useReducer, useState } from 'react';
import { ReactNode } from 'react';
import { CartItem, State } from '../types/types';
import cartReducer from './cartReducer';

const AppContext = React.createContext(undefined);

type Props = {
  children: ReactNode;
};

const initialState: State = {
  totalPrice: 0,
  totalItems: 0,
  cartItems: [],
};

export default function AppProvider({ children }: Props) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    async function fetchCartItems() {
      const res = await fetch(
        'https://course-api.com/react-useReducer-cart-project'
      );
      const data = (await res.json()) as CartItem[];
      setItems(data);
    }
    fetchCartItems();
  }, []);
}
