import React,{useState} from 'react';
import '../../scss/components/cat.scss';

function SelectCat(props) {

    const [price, setPrice] = useState(props.price);

    const amountHendler =(event)=>{
        //console.log(event.target.value);
        //const i = event.target.value;
        //const more = "more";  kek
        
        if("more" === event.target.value){
            console.log('1');
            props.cats = props.cats.sort((a, b) => a.price - b.price);
  //          setPrice(props.cats = props.cats.sort((a, b) => b.price - a.price));
        } else{
            console.log('2');
            props.cats = props.cats.sort((a, b) => b.price - a.price);
    //        setPrice(props.cats = props.cats.sort((a, b) => a.price - b.price));
        }
        
    }
    
    //cats = cats.sort((a, b) => b.price - a.price);

  return (
    <div className="">
        <select
            tabindex="10"
            name="price"
            className="price__cat-1"
            onChange={amountHendler} 
            >
            <option selected>Цена</option>
            <option value="more" className="cat__expensive" >
                Дороже
            </option>
            <option value="less" className="cheaper" >
                Дешевле
            </option>
            </select>
            <select tabindex="10" name="color" className="age__cat">
            <option selected value="age">
                Возраст
            </option>
            <option value="red" className="cat__young">
                Юные
            </option>
            <option value="adults" className="cat__adults">
                Взрослые
            </option>
            </select>
        </div>
  );
}

export default SelectCat;