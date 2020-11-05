export type CartItem = {
  id: string;
  title: string;
  price: string;
  img: string;
  amount: number;
};

export type State = {
  totalPrice: number;
  totalItems: number;
  cartItems: CartItem[];
};

export type Action = {
  type: string;
  payload?: number;
};
