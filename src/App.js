import React, {useState, Fragment} from 'react';
import Header from './components/Header/Header';
import Cat from './components/Cat/labaki/Cat';
import Cart from './components/Cart/Cart';
import CartContextProvider from './context/CartContextProvider';


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
    <Fragment>
    {cartIsVisible && <Cart onHideCart={hideCartHandler}  /> }
    <Header />
    <Cat onShowCart={showCartHandler}/>

    </Fragment>
    </CartContextProvider>
    
  );
}

export default App;
