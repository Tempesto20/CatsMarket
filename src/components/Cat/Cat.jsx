import React,{useState} from 'react';
import '../../scss/components/cat.scss';
import Card from './Card';

import ten from '../../img/10000.jpg';
import twenty from '../../img/20000.jpg';
import twentyFive from '../../img/25000.jpg';
import thirty from '../../img/30000.jpg';
import thirtyOne from '../../img/30000-1.jpg';
import fourty from '../../img/40000.jpg';
import like from '../../img/svg/like.svg';
import SelectCat from './SelectCat';

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
function Cat(props) {
	
		const [amountPrice, setAmountPrice]=useState(cats);

/*
	if(props.discount !== 0 ){
		console.log('ew');
	}
*/

		const amountChangeHandler =(amount)=>{
			setAmountPrice(amount);
			//console.log(amount);
			if(amount === 'more'){
			//	console.log('+');
				cats = cats.sort((a, b) => b.price - a.price);
			} else{
			//	console.log('-');
				cats = cats.sort((a, b) => a.price - b.price);
			}
		}
		
	return (
    <div className="content__cat ">
    <div className="background__cat ">
      <div className="head__cat section-container">
        <h2 className="sorting__cat">Сортировать по:</h2>
        <SelectCat
			cats ={cats}
			amount={amountPrice}
			onChangeAmount ={amountChangeHandler}
		/>
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
