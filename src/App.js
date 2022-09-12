import React, {useState} from 'react';
import Header from './components/Header/Header';
import Cat from './components/Cat/Cat';
import Cart from './components/Cart/Cart';
import CartContextProvider from './context/CartContextProvider';
import Bottom from './components/Bottom/Bottom';


function App() {

  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler =()=>{
    setCartIsVisible(true);
  }

const hideCartHandler =()=>{
  setCartIsVisible(false);
}

  return (
    <CartContextProvider>
    {cartIsVisible && <Cart onHideCart={hideCartHandler}  /> }
    <Header />
    <Cat onShowCart={showCartHandler}/>
    <Bottom />
    </CartContextProvider>
  );
}

export default App;
