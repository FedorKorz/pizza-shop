export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export const ADD_PRICE_TO_CART = "ADD_PRICE_TO_CART";

export const addItemToCart = () => {
  return {
    type: ADD_ITEM_TO_CART
  };
};

// Increment counter of bought items 

export const addPriceToCart = (price) => {
  return {
    type: ADD_PRICE_TO_CART,
    price
  };
}

// Counter of summ bought items, price is payload parametr, 

// Actions that interact with redux state.