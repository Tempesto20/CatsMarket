import React, { Component } from "react";
//import styled from "styled-components";
import { Formik } from "formik";
import { Form, Input, Title, Text, Button, Label } from "./theme.js";




class Proba2 extends Component {
    render() {
      return (
        <div>
          <Title>Form</Title>
          {/* FORMIK */}
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={values => {
              console.log(values);
            }}
            onSubmit={values => {
              console.log(values);
            }}
            render={({
              touched,
              errors,
              values,
              handleChange,
              handleBlur,
              handleSubmit
            }) => (
              <Form onSubmit={handleSubmit}>
                <Label>
                  Email *
                  {errors.email && <Text color="red">{errors.email}</Text>}
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    border={errors.email && "1px solid red"}
                    type="text"
                    name="email"
                    placeholder="Email"
                  />
                </Label>
                <Label>
                  Password *
                  {errors.password && <Text color="red">{errors.password}</Text>}
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    border={errors.password && "1px solid red"}
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </Label>
                <Button type="submit">Submit</Button>
              </Form>
            )}
          />
          {/* END OF FORMIK */}
        </div>
      );
    }
  }
export default Proba2;