import React from 'react';
import '../../scss/components/cat.scss';
import Card from './Card';

import ten from '../../img/10000.jpg';
import twenty from '../../img/20000.jpg';
import twentyFive from '../../img/25000.jpg';
import thirty from '../../img/30000.jpg';
import thirtyOne from '../../img/30000-1.jpg';
import fourty from '../../img/40000.jpg';
import like from '../../img/svg/like.svg';

function Cat(props) {

    let cats = [
		{
			price: 30000,
			img: thirty,
			discount: 40,
			buy: 'Купить',
			like: like,
			isSell: false,
			isFavorite: false
		},
		{
			price: 40000,
			img: fourty ,
			discount: 0,
			buy: 'Продан',
			like: like,
			isSell: true,
			isFavorite: true
		},
		{
			price: 20000,
			img: twenty,
			discount: 0,
			buy: 'Купить',
			like: like,
			isSell: false,
			isFavorite: false
		},
		{
			price: 25000,
			img: twentyFive,
			discount: 0,
			buy: 'Купить',
			like: like,
			isSell: false,
			isFavorite: false
		},
		{
			price: 30000,
			img: thirtyOne,
			discount: 40,
			buy: 'Купить',
			like: like,
			isSell: false,
			isFavorite: false
		},
		{
			price: 10000,
			img: ten,
			discount: 0,
			buy: 'Продан',
			like: like,
			isSell: true,
			isFavorite: false
		}
	];

/*
	if(cats.isSell !== true ){
		console.log('ew');
	}
*/


	//cats = cats.sort((a, b) => b.price - a.price); // наибольшее
	
	//cats = cats.sort((a, b) => a.price - b.price); // наименьшее


/*
if (currentSort === 'expensive') {
		cats = cats.sort(function(a, b) {
			return a.price - b.price;
		});
*/

  return (
    <div classNameName="content__cat ">
    <div classNameName="background__cat ">
      <div classNameName="head__cat section-container">
        <h2 classNameName="sorting__cat">Сортировать по:</h2>
        <select
          tabindex="10"
          name="price"
          classNameName="price__cat-1"
          id="sort_price"
        >
          <option selected>Цена</option>
          <option value="expensive" classNameName="cat__expensive">
            Дороже
          </option>
          <option value="cheaper" classNameName="cheaper">
            Дешевле
          </option>
        </select>
        <select tabindex="10" name="color" classNameName="age__cat">
          <option selected value="age">
            Возраст
          </option>
          <option value="red" classNameName="cat__young">
            Юные
          </option>
          <option value="adults" classNameName="cat__adults">
            Взрослые
          </option>
        </select>
      </div>

	  <div className="max_cat">
    <Card
    	cats ={cats}
    />
        </div>
    </div>
    </div>
  );
}

export default Cat;
