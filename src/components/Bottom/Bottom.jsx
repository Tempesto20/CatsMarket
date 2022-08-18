import React from 'react';
import '../../scss/components/bottom.scss';

function Bottom() {
  return (
    <div className="botton__content" id="news">
    <div className="bottom__conteiner section-container">
        <div className="bottom__background">
            <div className="bottom__row">
                <h2 className="bottom__title">Успей купить!</h2>
                <div className="bottom_link">
                    <div className="bottom__email">
                        <div id="bottom__email-1">
                            <input id="bottom__email-2" type="text" placeholder="Ваш e-mail" className="contacts-input"></input>
                        </div>
                    </div>
                    <div className="bottom__button">
                        <div className="button__batton">
                            <a href="#" className="bottom__button-text" id="bottom__button-text">
                                Подписаться
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom__row-1">
                <h3 className="bottom__subtitle">
                    Подпишись и успей 
                    <br></br>
                    словить все акции
                </h3>
                <div className="bottom__input">
                    <label className="bottom__subscribe">
                        <input type="checkbox" checked="checked" className="input__bottom"></input>
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="subscribe__text">
                    <p>Подписаться на новости</p>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default Bottom;