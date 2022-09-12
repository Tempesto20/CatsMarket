import React,{useState } from 'react';
import '../../scss/components/cat.scss';
import ten from '../../img/10000.jpg';
import twenty from '../../img/20000.jpg';
import twentyFive from '../../img/25000.jpg';
import thirty from '../../img/30000.jpg';
import thirtyOne from '../../img/30000-1.jpg';
import fourty from '../../img/40000.jpg';
import like from '../../img/svg/like.svg';
import SelectCat from './SelectCat';
import Cards from './Cards';
import HeaderCartButton from '../Cart/HeaderCartButton';
//import Button from '../../Button/Button';

//import CartContexn from '../../../context/cart-context';


let CATS_BLOCK = [
	{
		id: 1,
		price: 30000,
		img: thirty,
		discount: 40,
		name: 'Эверетт',
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
		buy: 'Продан',
		like: like,
		isSell: true,
		isFavorite: false
	}
];
function Cat(props) {


/*
const cartContexn = useContext(CartContexn); 


    const onAddToCartHandler =(amount)=>{
		cartContexn.addItem({
		  id: props.id,
		  name: props.name,
		  img: props.img,
		  amount: amount,
		  price: props.price
		});  

	  }

console.log(cartContexn);
//console.log(cartContexn.items.amount.price);


onAddToCart={onAddToCartHandler}
*/
    const catList = CATS_BLOCK.map(cat => (
		<Cards 
		  key={cat.id} 
		  id={cat.id}
		  img ={cat.img}
		  discount={cat.discount}
		  name={cat.name}
		  price={cat.price}
		  buy={cat.buy}
		  like={cat.like}
		  isSell={cat.isSell}
		  
		/>
	  ));

		const catsBlock = CATS_BLOCK;

		const [amountPrice, setAmountPrice]=useState(CATS_BLOCK);

		const amountChangeHandler =(amount)=>{
			setAmountPrice(amount);
			//console.log(amount);
			if(amount === 'more'){
			//	console.log('+');
			CATS_BLOCK = CATS_BLOCK.sort((a, b) => b.price - a.price);
			} else{
			//	console.log('-');
			CATS_BLOCK = CATS_BLOCK.sort((a, b) => a.price - b.price);
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
			<HeaderCartButton onClick={props.onShowCart}/>
			</div>

		</div>
		<div className="background__cat ">

			{catList}

		</div>
    </div>
  );
}

export default Cat;
