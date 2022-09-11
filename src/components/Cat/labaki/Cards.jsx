import React, {useState,useContext} from 'react';
import line from '../../../img/svg/line.svg';

import  './cards.scss';

import like2 from '../../../img/svg/like2.svg';
import CartContexn from '../../../context/cart-context';

function Cards(props) {

  const [like, setLike] = useState(false);

  
  const chengeLikeHamdlerYes = ()=>{
    setLike(true);  
  }

  const chengeLikeHamdlerNo = ()=>{
    setLike(false);
  }

/*
const clickHandler =()=>{
const LOL = {
  id: props.id,
  name: props.name,
  img: props.img,
  amount: props.amount,
  price: props.price
}
//console.log(LOL.amount);
//console.log(LOL.price);
props.onAddToCart(LOL);
}
*/
const cartContexn = useContext(CartContexn); 

const clickHandler =(amount)=>{
  cartContexn.addItem({
    id: props.id,
    name: props.name,
    img: props.img,
    amount: amount,
    price: props.price
  });  

  }




const cardDiscount = 
<div className="card__discount" >
<p className="discount" >-{props.discount}%</p>
</div>;

const cardDiscountNone = <div></div>

const catBuy=  
<div className="buy__cat" >
  <a href="#!" className="byu__cat-1 " onClick={clickHandler} >
    {props.buy}
  </a>
</div>;

const catSold =
<div className="buy__cat sold" >
<a href="#!" className="byu__cat-1 ">
  {props.buy}
</a>
</div>;




  return (
<React.Fragment>      
  <div className="cards__cat">
        <div className="card">
          
          <div className="card__img" alt="">       
            <img src={props.img} alt=""  className="card__cat-img"/>
          </div>

            {props.discount !== 0 ? (cardDiscount):(cardDiscountNone) }

              <div className="card__like" >

                {!like && <img src={props.like} onClick={chengeLikeHamdlerYes} alt=""/> }
                {like && <img src={like2} onClick={chengeLikeHamdlerNo} alt=""/> }  
      
            </div>
            
          <div className="card__background">
            <h2 className="card__title">{props.name}</h2>
            <div className="card__cat-row">

              <img src={line} alt="" className="line"></img>

              <p className="color__cat">
                Коричневый 
                <br></br>
                окрас
              </p>
              <div className="cat_year">
                <p className="years__cat">2 мес</p>
                <p className="years__cat-1">Возраст</p>
              </div>
              <div className="cat__quantity">
                <p className="old__cat">4

                <p className="quantity__cat">Кол-во лап</p>
                </p>
              </div>
            </div>
            <h3 className="price__cat">{props.price} руб.</h3>
          
            {props.buy !== 'Продан' ? (catBuy):(catSold)}
                          
          </div>
        
        </div>
      </div>
      </React.Fragment>


  );
}

export default Cards;