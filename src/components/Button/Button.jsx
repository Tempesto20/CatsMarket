import React,{useState} from 'react';
import '../../scss/components/button.scss';
import Cards from '../Cat/Cards';
import ButtonToggle from './ButtonToggle';

function Button(props) {
  const[isFormVisible,setIsFormVisible] = useState(false);

  const inputCostDataHandler =()=>{
    setIsFormVisible(true);
  }



//console.log(props.cats.length);
  return (
/*
    <div className="button__content">
    <div className="button__bottom">
        <div className="button__wrap section-container">
            <div className="button__title">

              <a  className="button__text" onClick={inputCostDataHandler}>
                  Показать еще 20
                </a>
  
                {!isFormVisible &&<a onClick={inputCostDataHandler} className="button__text">
                  Показать еще 20
                </a>}

                {isFormVisible && <Cards />

                }


            </div>
        </div>
    </div>
</div>
 */
<div className="">
{!isFormVisible &&<a onClick={inputCostDataHandler} className="button__text">
                 <ButtonToggle cats ={props.cats}/>  
                </a>}

                {isFormVisible && 

             <div className="">  
<Cards 
        img ={props.cats[6].img}
        discount={props.cats[6].discount}
        price={props.cats[6].price}
        buy={props.cats[6].buy}
        like={props.cats[6].like}
        isSell={props.cats[6].isSell}
        />

        <Cards 
            img ={props.cats[7].img}
            discount={props.cats[7].discount}
            price={props.cats[7].price}
            buy={props.cats[7].buy}
            like={props.cats[7].like}
            isSell={props.cats[7].isSell}
        />

        <Cards 
            img ={props.cats[8].img}
            discount={props.cats[8].discount}
            price={props.cats[8].price}
            buy={props.cats[8].buy}
            like={props.cats[8].like}
            isSell={props.cats[8].isSell}
        />

        <Cards 
            img ={props.cats[9].img}
            discount={props.cats[9].discount}
            price={props.cats[9].price}
            buy={props.cats[9].buy}
            like={props.cats[9].like}
            isSell={props.cats[9].isSell}
        />

        <Cards 
            img ={props.cats[10].img}
            discount={props.cats[10].discount}
            price={props.cats[10].price}
            buy={props.cats[10].buy}
            like={props.cats[10].like}
            isSell={props.cats[10].isSell}
        />

        <Cards 
            img ={props.cats[11].img}
            discount={props.cats[11].discount}
            price={props.cats[11].price}
            buy={props.cats[11].buy}
            like={props.cats[11].like}
            isSell={props.cats[11].isSell}
        />
        
        </div> }

        </div>
              

  );
}

export default Button;