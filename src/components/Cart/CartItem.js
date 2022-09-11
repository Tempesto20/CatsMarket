import classes from "./CartItem.module.css";

const CartItem = (props) => {

  return (
    <li className={classes["cart-item"]}>
      <div>
        <img src={props.img} alt=""  className="card__cat-img"/>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{props.price}</span>
          <span className={classes.amount}>x 1</span>
        </div>
      </div>

{/*      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
  */}

    </li>
  );
};

export default CartItem;
