import React,{useState} from 'react';
import '../../scss/components/bottom.scss';

function Bottom() {
    const[ mail, setMail ]=useState('');
    
    const validateEmail =(email)=> {
		const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}
    
    const inputMail =<input id="bottom__email-2" type="text" placeholder="Ваш e-mail" className="contacts-input"></input>;

    const email = inputMail;

    const mailTrue = <input id="bottom__email-2" type="text" placeholder="Ваш e-mail" className="contacts-input ok"></input>;
    const mailFalse = <input id="bottom__email-2" type="text" placeholder="Ваш e-mail" className="contacts-input error"></input>;
   
    const chengeMail  = ()=>{

        if(validateEmail(email.value)){
            setMail(mailTrue);
        } else{
            setMail(mailFalse);
        } 
      }
    


/*    
    const inputMail =<input id="bottom__email-2" type="text" placeholder="Ваш e-mail" className="contacts-input"></input>;
    const mailTrue = <input id="bottom__email-2" type="text" placeholder="Ваш e-mail" className="contacts-input ok"></input>;
    const mailFalse = <input id="bottom__email-2" type="text" placeholder="Ваш e-mail" className="contacts-input error"></input>;
	
    const bottomButton =()=> {
		const email = inputMail;
		if (validateEmail(email.value)) {
			email.classList.remove('error');
			email.classList.add('ok');
		} else {
			email.classList.remove('ok');
			email.classList.add('error');
		}
		return false;
	}
*/


  return (
    <div className="botton__content" id="news">
    <div className="bottom__conteiner section-container">
        <div className="bottom__background">
            <div className="bottom__row">
                <h2 className="bottom__title">Успей купить!</h2>
                
                
                <form className="bottom_link">
                    <div className="bottom__email">
                        <div id="bottom__email-1">

                        {inputMail !== (validateEmail(email.value)) ? (mailTrue):(mailFalse)}
                        
{/*                        
                        { validateEmail(email.value) !== true ? 
                        (<input id="bottom__email-2" type="text" placeholder="Ваш e-mail" className="contacts-input ok"></input>) 
                            :
                        (<input id="bottom__email-2" type="text" placeholder="Ваш e-mail" className="contacts-input error"></input>)
                         }
                         
*/}


{/*
                        {mail && <input id="bottom__email-2" type="text" placeholder="Ваш e-mail" className="contacts-input ok"></input>}
                        {!mail &&<input id="bottom__email-2" type="text" placeholder="Ваш e-mail" className="contacts-input error"></input>}
   */}                     
                        {/*<input id="bottom__email-2" type="text" placeholder="Ваш e-mail" class="contacts-input"></input>*/}



                        </div>
                    </div>
                    <div className="bottom__button">
                        <div className="button__batton">
                            <a href="#" className="bottom__button-text" onClick={chengeMail}>
                                Подписаться
                            </a>
                        </div>
                    </div>
                </form>


            </div>
            <div className="bottom__row-1">
                <h3 className="bottom__subtitle">
                    Подпишись и успей 
                    <br></br>
                    словить все акции
                </h3>
                <div className="bottom__input">
                    <label className="bottom__subscribe">
                        <input type="checkbox"  className="input__bottom"></input>
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