import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};


const cartReducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
  
      const existingCartItemIndex = state.items.findIndex((item) => { //проверка на существет ли такой эллемент в корзине 
        return item.id === action.item.id;
      });
  
      const existingCartItem = state.items[existingCartItemIndex]; //существующий эллемент корзины
  
      let updatedItem;
      let updatedItems;
  
      if (existingCartItem) {
        updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
  
        updatedItems = [...state.items]; //помещение копии в миссив
        updatedItems[existingCartItemIndex] = updatedItem;// помещение нового значения в массив из переменной updatedItem
      } else {
        updatedItem = {
          ...action.item,
        };
        updatedItems = state.items.concat(updatedItem);
      }
  
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
  
    if (action.type === "REMOVE_ITEM") { //добавление функционала по удалению из корзины
      const existingCartItemIndex = state.items.findIndex((item) => { // проверка существет ли такой эллемент в корзине
        return item.id === action.id;
      });
  
      const existingCartItem = state.items[existingCartItemIndex]; //существующий эллемент корзины
  
      const updatedTotalAmount = state.totalAmount - existingCartItem.price;
  
      let updatedItems;
      if (existingCartItem.id === action.id) { //Для удаления по id
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {//уменьшение на единицу товара в корзине
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
  
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
  
    return defaultCartState;
  };



  const CartContextProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(
      cartReducer,
      defaultCartState
    );
  
    const addItemHandler = (item) => {
      dispatchCartAction({
        type: "ADD_ITEM",
        item: item,
      });
    };
  
    const removeItemHandler = (id) => {
      dispatchCartAction({
        type: "REMOVE_ITEM",
        id: id,
      });
    };
  
    const cartContext = {
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: addItemHandler,
      removeItem: removeItemHandler,
    };
  
    return (
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
    );
  };
  
  export default CartContextProvider;