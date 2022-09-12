import React from 'react';
import '../../scss/components/bottom.scss';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


class Bottom extends React.Component{
    render() {

  return (
    <div className="botton__content">
        
    <div className="bottom__conteiner section-container">
        <div className="bottom__background">
            <div className="bottom__row">
                <h2 className="bottom__title">Успей купить!</h2>
                    
                    
                <Formik
                initialValues={{
                    email: '',
                }}
                validationSchema={Yup.object().shape({
                   
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    
                })}
                onSubmit={values => {
                  //console.log(values)  
                }}
                render={({ errors, status, touched }) => (
                <Form>
                    <div className="bottom_link">
                        <div className="form-group bottom__email" >

                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" placeholder="Ваш e-mail" className={'bottom__email-2 form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" /> 
                             
                        </div>
                        

                            <div className="bottom__button">
                                <div className="button__batton">

                                    <button
                                    type="submit" 
                                    className="bottom__button-text btn "
                                     >
                                                Подписаться
                                    </button>

                                </div>
                            </div>
                    </div>
               </Form>
                )}
            />

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
}

export default Bottom;