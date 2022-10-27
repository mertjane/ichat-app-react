import React from 'react'
import { FormWrapper } from "./Pages.styled";
import { RiKakaoTalkLine } from 'react-icons/ri';


const Login = () => {
  return (
    <FormWrapper>
      <form>
        <RiKakaoTalkLine className="logo"/>
        <span>Login</span>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign in</button>
        <p>Don't you have an account? Register</p>
      </form>
    </FormWrapper>
  )
}

export default Login