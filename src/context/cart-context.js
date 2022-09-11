import React from 'react'

const CartContexn = React.createContext({
    items: [],
    totalAmount: 0, 
    addItem: (item) => {},
    removeItem: (id) => {}

});

export default CartContexn;