import React,{useState} from 'react';
import { Formik } from 'formik'
import * as yup from 'yup'
//import './App.scss'
import '../../scss/components/bottom.scss';


function Proba() {
const[visible,setVisible]=useState();

const red = <div className="b_red">You Pidor</div>
  const validationsSchema = yup.object().shape({

    email: yup.string().email(red).required('Обязательно')
  })
  setVisible(red);
  return (
    <div>
      <Formik
        initialValues={{
          email: ''
        }}

        validateOnBlur
        onSubmit={(values) => { console.log(values) }}
        validationSchema={validationsSchema}
      >

        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <div className={`from`}>


            <div>
              <label htmlFor={`email`}>Email</label><br />
              <input
                className={'input'}
                type={`email`}
                name={`email`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </div>
            {touched.email && errors.email && <input className="b_red">{errors.email}</input>}



            <button
              disabled={!isValid || !dirty}
              onClick={handleSubmit}
              type={`submit`}
            >Отправить</button>
          </div>
          
        )}
      </Formik>
    </div>
  );
}

export default Proba;