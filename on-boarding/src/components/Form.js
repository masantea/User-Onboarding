import React from "react";
import { withFormik, Form, Field } from "formik";

const UserForm = () => {
  return (
    <Form>
      <Field placeholder="Name" name="name" />
      <Field placeholder="Email" type="email" name="email" />
      <Field placeholder="Password" type="password" name="password" />
      <Field
        placeholder="Terms of Service"
        type="checkbox"
        name="termsOfService"
      />
      <button>"Submit"</button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues(props) {
    return {
      name: props.name || "",
      email: props.email || "",
      password: props.password || "",
      termsOfService: props.termsOfService || false
    };
  },

  handleSubmit(values) {
    console.log(values);
  }
})(UserForm);
