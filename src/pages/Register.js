import React from 'react'
import { FormWrapper } from './Pages.styled'
import { RiKakaoTalkLine } from 'react-icons/ri';


const Register = () => {
  return (
    <FormWrapper>
      <form>
        <RiKakaoTalkLine className="logo"/>
        <span>Register</span>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm password" />
        <button>Sign up</button>
        <p>Have an account already? Login</p>
      </form>
    </FormWrapper>
  )
}

export default Register