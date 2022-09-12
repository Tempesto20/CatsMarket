import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

class Proba2 extends React.Component {
    render() {
        return (
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
                  console.log(values)  
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">Register</button>
                        </div>
                    </Form>
                )}
            />
        )
    }
}

export default Proba2 ;