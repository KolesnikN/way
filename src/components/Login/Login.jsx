import React from "react"
import { Field, reduxForm } from "redux-form"
import { Input } from "../common/FormsControl/FormsControl"
import { required } from "../../utils/validators/validators"

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Login"}
          name={"login"}
          validate={[required]}
          component={Input}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          validate={[required]}
          component={Input}
        />{" "}
      </div>
      <div>
        <Field component={Input} name={"rememberMe"} type={"checkbox"} />{" "}
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm)

export const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}
