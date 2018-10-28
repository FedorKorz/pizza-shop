export default function(state = 0, action) {
    console.log('редьюсер запустился');
    switch(action.type) {
      case 'ADD_ITEM_TO_CART':
        state = state + 1;
        return state;
      default:
          return state;
    }
  };