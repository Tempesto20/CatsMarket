import React,{useState } from 'react';
import ten from '../../assets/img/10000.jpg';
import twenty from '../../assets/img/20000.jpg';
import twentyFive from '../../assets/img/25000.jpg';
import thirty from '../../assets/img/30000.jpg';
import thirtyOne from '../../assets/img/30000-1.jpg';
import fourty from '../../assets/img/40000.jpg';
import like from '../../assets/img/svg/like.svg';
import '../../scss/components/cat.scss';
import SelectCat from './SelectCat';
import Cards from './Cards';
import CartButton from '../Cart/CartButton';
//import Button from '../../Button/Button';

//import CartContexn from '../../../context/cart-context';


let CATS_BLOCK = [
	{
		id: 1,
		price: 30000,
		img: thirty,
		discount: 40,
		name: 'Эверетт',
		age: 2,
		buy: 'Купить',
		like: like,
		isSell: false,
		isFavorite: false
	},
	{
		id: 2,
		price: 40000,
		img: fourty ,
		discount: 0,
		name: 'Генри',
		age: 3,
		buy: 'Продан',
		like: like,
		isSell: true,
		isFavorite: true
	},
	{
		id: 3,
		price: 20000,
		img: twenty,
		discount: 0,
		name: 'Чарли',
		age: 9,
		buy: 'Купить',
		like: like,
		isSell: false,
		isFavorite: false
	},
	{
		id: 4,
		price: 25000,
		img: twentyFive,
		discount: 0,
		name: 'Эдвин',
		age: 6,
		buy: 'Купить',
		like: like,
		isSell: false,
		isFavorite: false
	},
	{
		id: 5,
		price: 30000,
		img: thirtyOne,
		discount: 40,
		name: 'Сэм',
		age: 1,
		buy: 'Купить',
		like: like,
		isSell: false,
		isFavorite: false
	},
	{
		id: 6,
		price: 10000,
		img: ten,
		discount: 0,
		name: 'Маршалл',
		age: 8,
		buy: 'Продан',
		like: like,
		isSell: true,
		isFavorite: false
	}
];
function Cat(props) {


    const catList = CATS_BLOCK.map(cat => (
		<Cards 
		  key={cat.id} 
		  id={cat.id}
		  img ={cat.img}
		  discount={cat.discount}
		  name={cat.name}
		  age={cat.age}
		  price={cat.price}
		  buy={cat.buy}
		  like={cat.like}
		  isSell={cat.isSell}
		  
		/>
	  ));

		const catsBlock = CATS_BLOCK;

		const [amountPrice, setAmountPrice]=useState(CATS_BLOCK);

		const amountChangeHandler =(amount)=>{
			setAmountPrice(amount );
			//console.log(amount);
			if(amount === 'more'){
			//	console.log('+');
			CATS_BLOCK = CATS_BLOCK.sort((a, b) => b.price - a.price);
			} else if(amount === 'less'){
			//	console.log('-');
			CATS_BLOCK = CATS_BLOCK.sort((a, b) => a.price - b.price);
			}else if(amount === 'older'){
			CATS_BLOCK = CATS_BLOCK.sort((a, b) => b.age - a.age);
			} else if(amount === 'under'){
				CATS_BLOCK = CATS_BLOCK.sort((a, b) => a.age - b.age);
			}
		}


	return (
    <div className="content__cat ">

		<div className="head__cat">

		<SelectCat 						
			cats ={catsBlock}
			amount={amountPrice}
			
			onChangeAmount ={amountChangeHandler}
			/>
			
			<div className="cart">
			<CartButton onClick={props.onShowCart}/>
		

			</div>

		</div>
		<div className="background__cat ">

			{catList}

		</div>
    </div>
  );
}

export default Cat;
