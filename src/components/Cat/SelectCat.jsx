import React from 'react';
import Form from 'react-bootstrap/Form';
import '../../scss/components/selectCat.scss';



function SelectCat(props) {

const amountHendler =(event)=>{
    props.onChangeAmount(event.target.value);
    //console.log(event.target.value);
    //setOld(defaultValueOld);
}

  return (
        <div className="sort">
            <h2 className="sorting__cat">Сортировать по:</h2>
            
            <Form.Select 
                aria-label="Default select example"
                tabIndex="10"
                name="price"
                className="catSelect"
                onChange={amountHendler}           
                >
                <option defaultValue value="defaultPrice">Рекомендованные</option>
                <option value="more" className="cat__expensive" >
                    Дороже
                </option>
                <option value="less" className="cheaper" >
                    Дешевле
                </option>

                <option value="under" className="cat__young">
                    Юные
                </option>
                <option value="older" className="cat__adults">
                    Взрослые
                </option>

            </Form.Select>
            
            </div>
);
}

export default SelectCat;