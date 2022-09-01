import React from 'react';
import '../../scss/components/button.scss';

function ButtonToggle(props) {
  return (
    <div className="button__content">
    <div className="button__bottom">
        <div className="button__wrap section-container">
            <div className="button__title">
              <a  className="button__text" >
                  Показать еще {props.cats.length / 2}
                </a>
            </div>
        </div>
    </div>
</div>
  )
}

export default ButtonToggle;