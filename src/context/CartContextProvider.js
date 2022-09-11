import React,{useReducer} from 'react';
import CartContexn from './cart-context';



const defaultCartState = {
    items: [],
    totalAmount: 0
};


const cartReducer =(state, action)=>{
    //122 - reducer
    if(action.type === 'ADD_ITEM'){
        const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount);

        /*
        const existingCartItemIndex = state.items.findIndex();
        125
*/
        const updatedItems = state.items.concat(action.item);


        return{
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    return(

        defaultCartState
    )
};


function CartContextProvider(props) {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);


    const addItemHandler = item => {
        dispatchCartAction({
            type: 'ADD_ITEM',
            item: item
        });
    };

    const removeItemHandler = id => {
        dispatchCartAction({
            type: 'REMOVE_ITEM',
            id: id
        });
    };

    const сartContexn = {
        items: cartState.items,
        totalAmount: cartState.totalAmount, 
        addItem: addItemHandler,
        removeItem: removeItemHandler
    
    };

  return (
    <CartContexn.Provider value={сartContexn}>
        {props.children}
    </CartContexn.Provider>
    
  )
}

export default CartContextProvider;

//Управлять данным контекста корзины и предоставлять данные всем компанентам которые имеют к нему доступ 