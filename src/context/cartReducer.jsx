import { ADD_PRODUCT, REMOVE_PRODUCT } from './constants';

export function cartReducer(state, { type, payload }) {
  switch (type) {
    case ADD_PRODUCT:
      let newCart = state.items.map((item) => {
        if (item.id === payload.id) {
          item = { ...item, amount: (item.amount += 1) };
        }
        return item;
      });
    case REMOVE_PRODUCT:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload.id),
      };

    default:
      throw new Error('Action not supported');
  }
}
