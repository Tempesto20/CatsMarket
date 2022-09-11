import React,{useContext} from 'react';
import CartContexn from '../../context/cart-context';
import Modal from './Modal';
import styles from './Cart.module.css';
import CartItem from './CartItem';

function Cart(props) {
// Данные внутри корзины 
    const cartContexn = useContext(CartContexn); 

    //const totalAmount = cartContexn.totalAmount; 
  
    const totalAmount = cartContexn.items.reduce( (currentValue, item)=>{
      return(
          currentValue + item.price
      );
  },   0  );  

    console.log(cartContexn);

    const hasItems = cartContexn.items.length > 0 ; //Отображает кнопку, только тогда, когда имеются заказы

    const removeCartItemHandler =(id)=>{

    }

    const addCartItemHandler =(item)=>{

    }

    const cartItems = (
        <ul className={styles['cart-items']}>
        { cartContexn.items.map( (item) =>(
                //<li>{item.name}</li>
                <CartItem 
                key={item.id}
                img={item.img}
                name={item.name}
                price={item.price}

                onRemove={removeCartItemHandler.bind(null, item)}
                onAdd={addCartItemHandler.bind(null, item.id)}
                />
                ))}      
            </ul>
    );
    //  amount={item.amount}

  return (
    <Modal onHideCart={props.onHideCart}>{/* onHideCart={props.onHideCart}*/}
         {cartItems}
        <div className={styles.total}>  
        <span>Итого</span>
        <span>{totalAmount} </span>   {/*{totalAmount} */}
        </div>
        <div className={styles.actions}>
            <button className={styles['button--alt'] } onClick={props.onHideCart}  >Закрыть корзину</button> {/*onClick={props.onHideCart} */}
            {hasItems && <button className={styles.button}>Заказать</button>} {/* {hasItems && <button className={styles.button}>Заказать</button>}*/}
        </div>
    </Modal>
  );
}

export default Cart;