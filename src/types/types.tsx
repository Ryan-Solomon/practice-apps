export type CartItem = {
  id: string;
  title: string;
  price: string;
  img: string;
  amount: number;
};

export type State = {
  cartItems: CartItem[];
  shoppingCartCount: 0;
};

export type Action = {
  type: string;
  payload?: number;
} | null;
