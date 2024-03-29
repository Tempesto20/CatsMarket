import React,{useContext} from 'react';
import CartContexn from '../../context/cart-context';
import CartIcon from './CartIcon';
import styles from '../../scss/components/сartButton.module.scss';

function HeaderCartButton(props) {
    
    // Бейджик - внешние данные 

    const cartContexn = useContext(CartContexn); 
    // для переоценки всего компаненита HeaderCartButton, если что-либо будет изменяться внутри,
    // а так-же в изменении CartContextProvider

    const cartItemsNumber = cartContexn.items.reduce( (currentValue, item)=>{
        return(
            currentValue + item.price
        );
    },   0  );   

    //  0 начальное значения которое помещеается в currentValue и отображается при первом запуске 


    return (

        <button className={styles.button} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span>Корзина</span>
            <span className={styles.badge}>{cartItemsNumber}</span> {/*{cartItemsNumber} */}
        </button>

    );
}

export default HeaderCartButton;