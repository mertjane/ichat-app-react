import { FormWrapper, Error } from "./Pages.styled";
import { RiKakaoTalkLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../features/auth/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const { isFetching, error } = useSelector((state) => state.user);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(dispatch, { username, password });
      navigate("/");
    } catch (err) {
      return console.log(error);
    }
  };
  return (
    <FormWrapper>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <RiKakaoTalkLine className="logo" />
        <span>Login</span>
        <input
          placeholder="Username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Error>Something went wrong...</Error>}
        <button type="submit " disabled={isFetching}>
          Sign in
        </button>
        <p>
          Don't you have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </FormWrapper>
  );
};

export default Login;
