import React from 'react';
import '../../scss/components/button.scss';

function Button() {
  return (
    <div className="button__content">
    <div className="button__bottom">
        <div className="button__wrap section-container">
            <div className="button__title">
                <a href="#" className="button__text">Показать еще 20</a>
            </div>
        </div>
    </div>
</div>
  );
}

export default Button;