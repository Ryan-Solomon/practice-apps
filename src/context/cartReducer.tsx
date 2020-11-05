import { State, Action } from '../types/types';
import { ADD_ITEM, REMOVE_ITEM } from './cartActions';

export default function cartReducer(state: State, action: Action) {
  switch (action.type) {
    case ADD_ITEM:
      return {};
    case REMOVE_ITEM:
      return {};

    default:
      return state;
  }
}
