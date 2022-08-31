import React,{useState} from 'react';
import '../../scss/components/button.scss';
import Cards from '../Cat/Cards';

function Button() {
  const[isFormVisible,setIsFormVisible] = useState(false);

  const inputCostDataHandler =()=>{
    setIsFormVisible(true);
  }

  const cancelCostHandler =()=>{
    setIsFormVisible(false);
  }


  return (
    <div className="button__content">
    <div className="button__bottom">
        <div className="button__wrap section-container">
            <div className="button__title">

{/*              <a  className="button__text" onClick={inputCostDataHandler}>
                  Показать еще 20
                </a>
  */}

                {!isFormVisible &&<a onClick={inputCostDataHandler} className="button__text">
                  Показать еще 20
                </a>}

                {isFormVisible && <Cards />

                }


            </div>
        </div>
    </div>
</div>
  );
}

export default Button;