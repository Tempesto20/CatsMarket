import React, {useState} from 'react';
import line from '../../img/svg/line.svg';

import '../../scss/components/cat.scss';

import like2 from '../../img/svg/like2.svg';


function Cards(props) {
 
  const [like, setLike] = useState(props.like);

  const chengeLikeHamdler = ()=>{
    setLike(like2);
  }

  return (

      <div className="cards__cat">
        <div className="card">
          
          <div className="card__img">       
            <img src={props.img} />
          </div>

          <div className="card__discount">
              <p className="discount">-{props.discount}%</p>
              </div>

              <div class="card__like" >
				        <img src={like} onClick={chengeLikeHamdler}/>
				      </div>
          <div className="card__background">
            <h2 className="card__title">Кот полосатый</h2>
            <div className="card__cat-row">

              <img src={line} alt="" class="line"></img>

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
            <div className="buy__cat sold" >
              <a href="#" class="byu__cat-1">
                {props.buy}
              </a>
            </div>
                        {/*
                          <div class="buy__cat">
                              <a href="#" class="byu__cat-1">Купить</a>
                          </div>
                          */}
                          
          </div>
        


        </div>
      </div>

  );
}

export default Cards;