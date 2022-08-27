import React, {useState} from 'react';
import line from '../../img/svg/line.svg';

import  '../../scss/components/cards.scss';

import like2 from '../../img/svg/like2.svg';


function Cards(props) {
 
  const [like, setLike] = useState(props.like);

  const chengeLikeHamdler = ()=>{
    setLike(like2);
        
  }

const cardDiscount = 
<div className="card__discount" >
<p className="discount" >-{props.discount}%</p>
</div>;

const cardDiscountNone = <div></div>

const catBuy=  
<div className="buy__cat" >
  <a href="#!" className="byu__cat-1">
    {props.buy}
  </a>
</div>;

const catSold =
<div className="buy__cat sold" >
<a href="#!" className="byu__cat-1">
  {props.buy}
</a>
</div>;




  return (

      <div className="cards__cat">
        <div className="card">
          
          <div className="card__img" alt="">       
            <img src={props.img} alt=""  className="card__cat-img"/>
          </div>

            {props.discount !== 0 ? (cardDiscount):(cardDiscountNone) }

              <div className="card__like" >
				        <img src={like} onClick={chengeLikeHamdler} alt=""/>
				      </div>
          <div className="card__background">
            <h2 className="card__title">Кот полосатый</h2>
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

  );
}

export default Cards;