import { combineReducers } from "redux";

import reducer_cart from "./reducer_cart";
import reducer_total_price_cart from "./reducer_total_price_cart";

const rootReducer = combineReducers({
  state: reducer_cart,
  totalPrice: reducer_total_price_cart
});

export default rootReducer;