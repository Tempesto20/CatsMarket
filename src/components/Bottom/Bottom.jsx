//import React,{useState} from 'react';
import '../../scss/components/bottom.scss';
import { Formik } from 'formik';
//import styled, { css } from 'styled-components';


function Bottom() {
    

  return (
    <div className="botton__content">
        
    <div className="bottom__conteiner section-container">
        <div className="bottom__background">
            <div className="bottom__row">
                <h2 className="bottom__title">Успей купить!</h2>
                            <Formik
                                    initialValues={{ email: '' }}
                                    validate={values => {
                                        const errors = {};
                                        if (!values.email) {
                                        errors.email = 'Required';
                                        
                                        } else if (
                                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                        ) {
                                        errors.email = 'Invalid email address';
                                        
                                        }
                                        return errors;
                                        
                                    }}
                                    onSubmit={(values, { setSubmitting }) => {
                                        
                                       console.log(JSON.stringify(values, null, 2));
                                        setSubmitting(false);
                                        
                                    }}
                                >
                                    {({
                                        values,
                                        errors,
                                        touched,
                                        handleChange,
                                        handleBlur,
                                        handleSubmit,
                                        isSubmitting,
                                        /* and other goodies */
                                    }) => (
                                <form onSubmit={handleSubmit} className="bottom_link">
                                    <div className="bottom__email" >
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Ваш e-mail" className="contacts-input bottom__email-2" 
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}

                                            />  
                                             {/*style={{background: !isInputBackground ? ('red') : ('green')}}*/}   
                                        </div>
                                    
                                    <div className="bottom__button">
                                        <div className="button__batton">
                                            <button type="submit" disabled={isSubmitting} className="bottom__button-text btn" >
                                                Подписаться
                                            </button>
                                        </div>
                                    </div>
                                    {errors.email && touched.email && errors.email}
                                </form>
                            )}
                            </Formik>

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