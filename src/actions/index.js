export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export const ADD_PRICE_TO_CART = "ADD_PRICE_TO_CART";

export const addItemToCart = () => {
  return {
    type: ADD_ITEM_TO_CART
  };
};

export const addPriceToCart = (price) => {
  return {
    type: ADD_PRICE_TO_CART,
    price
  };
}