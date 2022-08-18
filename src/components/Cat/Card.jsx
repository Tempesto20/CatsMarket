import React from 'react';
import '../../scss/components/cat.scss';
import Cards from './Cards';

function Card(props) {

 

  return (
<div className="">
    <Cards 
    img ={props.cats[0].img}
    discount={props.cats[0].discount}
    price={props.cats[0].price}
    buy={props.cats[0].buy}
    isSell={props.cats[0].isSell}
/>

<Cards 
    img ={props.cats[1].img}
    discount={props.cats[1].discount}
    price={props.cats[1].price}
    buy={props.cats[1].buy}
    isSell={props.cats[1].isSell}
/>

<Cards 
    img ={props.cats[2].img}
    discount={props.cats[2].discount}
    price={props.cats[2].price}
    buy={props.cats[2].buy}
    isSell={props.cats[2].isSell}
/>

<Cards 
    img ={props.cats[3].img}
    discount={props.cats[3].discount}
    price={props.cats[3].price}
    buy={props.cats[3].buy}
    isSell={props.cats[3].isSell}
/>

<Cards 
    img ={props.cats[4].img}
    discount={props.cats[4].discount}
    price={props.cats[4].price}
    buy={props.cats[4].buy}
    isSell={props.cats[4].isSell}
/>

<Cards 
    img ={props.cats[5].img}
    discount={props.cats[5].discount}
    price={props.cats[5].price}
    buy={props.cats[5].buy}
    isSell={props.cats[5].isSell}
/>
</div>
  );
}

export default Card;