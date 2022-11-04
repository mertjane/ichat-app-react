import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { FormWrapper } from "./Pages.styled";
import { RiKakaoTalkLine } from "react-icons/ri";
import { register } from "../features/auth/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isFetching, error } = useSelector((state) => state.user);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
     await register(dispatch, { username, email, password, confirmPassword });
     navigate("/");
    } catch(erro) {
      return console.log(error)
    }
  };
  return (
    <FormWrapper>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <RiKakaoTalkLine className="logo" />
        <span>Register</span>
        <input placeholder="Username" type="text" onChange={(e) => setUsername(e.target.value)}/>
        <input placeholder="Email" type="text" onChange={(e) => setEmail(e.target.value)}/>
        <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
        <input placeholder="Confirm password" type="password" onChange={(e) => setConfirmPassword(e.target.value)}/>
        {error && <span>{error}</span>}
        <button type="submit" disabled={isFetching}>Sign up</button>
        <p>
          Have an account already? <Link to="/login">Login</Link>
        </p>
      </form>
    </FormWrapper>
  );
};

export default Register;
