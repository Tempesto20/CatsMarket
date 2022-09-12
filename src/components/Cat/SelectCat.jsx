import React from 'react';
import '../../scss/components/selectCat.scss';

function SelectCat(props) {


const amountHendler =(event)=>{
    props.onChangeAmount(event.target.value);
    //console.log(event.target.value);
}

  return (
    
        <div className="sort">
            <h2 className="sorting__cat">Сортировать по:</h2>
            
            <select
                tabIndex="10"
                name="price"
                className="price__cat-1"
                value={props.amount}
                onChange={amountHendler}           
                >
                <option defaultValue>Цена</option>
                <option value="more" className="cat__expensive" >
                    Дороже
                </option>
                <option value="less" className="cheaper" >
                    Дешевле
                </option>
                </select>
                <select tabIndex="10" name="color" className="age__cat"  >
                <option defaultValue value="age">
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