import React, {useState} from "react"

import {connect} from "react-redux"

import FormInput from "../form-input/form-input.component"

import CustomButton from "../custom-button/custom-button.component"

import {signUpStart} from "../../redux/user/user.actions"

import "./sign-up.styles.scss"
import {async} from "@firebase/util"

const SignUp = ({signUpStart}) => {
  const [userCredentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const {displayName, email, password, confirmPassword} = userCredentials
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("passwords don't match")
    }

    signUpStart({displayName, email, password})
  }

  const handleChange = (e) => {
    const {name, value} = e.target

    setCredentials({...userCredentials, [name]: value})
  }
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        ></FormInput>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        ></FormInput>
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
})

export default connect(null, mapDispatchToProps)(SignUp)
