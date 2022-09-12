//import React,{useState} from 'react';
import '../../scss/components/bottom.scss';
import { Formik } from 'formik';
import * as yup from 'yup';
//import styled, { css } from 'styled-components';


function Bottom() {
    const validationsSchema = yup.object().shape({
        email: yup.string().email('Введите верный email').required('Обязательно')
    });

  return (
    <div className="botton__content">
        
    <div className="bottom__conteiner section-container">
        <div className="bottom__background">
            <div className="bottom__row">
                <h2 className="bottom__title">Успей купить!</h2>
                    <Formik
                        initialValues={{
                        email: ''
                        }}

                        validateOnBlur
                        onSubmit={(values) => { console.log(values) }}
                        validationSchema={validationsSchema}
                    >
                    {({ values, errors, touched, 
                    handleChange, handleBlur, isValid, 
                    handleSubmit, dirty }) => (

                                <div onSubmit={handleSubmit} className="bottom_link">
                                    <div className="bottom__email" >
                                            <input
                                                className={'input contacts-input bottom__email-2'}
                                                type={`email`}
                                                name={`email`}
                                                placeholder="Ваш e-mail"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                            />  
                             
                                        </div>
                                        {touched.email && errors.email && <div className={'error'}>{errors.email}</div>}

                                    <div className="bottom__button">
                                        <div className="button__batton">
                                            <a
                                                disabled={!isValid || !dirty}
                                                onClick={handleSubmit}
                                                type={`submit`}
                                                className="bottom__button-text"
                                                href='#!' 
                                            >
                                                Подписаться
                                            </a>
                                            {/*        
                                            type="submit" 
                                            disabled={!isValid || !dirty} 
                                            onClick={handleSubmit}  
                                            */}
                                        </div>
                                    </div>
                                </div>
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