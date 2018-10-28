export default function(totalPrice = 0, action) {
    switch(action.type) {
      case 'ADD_PRICE_TO_CART':
        totalPrice += action.price;
        return totalPrice;
      default:
          return totalPrice;
    }
  };