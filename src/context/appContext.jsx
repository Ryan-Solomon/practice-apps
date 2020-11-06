import React, { createContext, useReducer, useContext } from 'react';
import cartItems from './cartItems';
import { cartReducer } from './cartReducer';
import { ADD_PRODUCT, REMOVE_PRODUCT } from './constants';

const AppContext = createContext();

const initialState = {
  items: cartItems,
  totalCount: 0,
  totalPrice: 0,
};

export default function AppProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { items, totalCount, totalPrice } = state;

  const addProduct = (item) => {
    dispatch({
      type: ADD_PRODUCT,
      payload: item,
    });
  };
  const removeProduct = (item) => {
    dispatch({
      type: REMOVE_PRODUCT,
      payload: item,
    });
  };

  return (
    <AppContext.Provider
      value={{ items, totalCount, totalPrice, addProduct, removeProduct }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
