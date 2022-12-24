import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/services";
import { FormWrapper } from "./Pages.styled";
import { Link, useNavigate } from "react-router-dom";
import LoginError from "../components/Error/LoginError";
import Loading from "../components/Loading/Loading";
import logo from "../assets/logo.png"

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [currentUser, setCurrentUser] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (auth.userId) {
      navigate("/");
    }
  }, [auth.userId, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(currentUser)
    dispatch(loginUser(currentUser));
  };

  return (
    <FormWrapper>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <img src={logo} alt="ichat" className="logo" />
        <span>Login</span>
        <input
          placeholder="Username"
          type="text"
          onChange={(e) => setCurrentUser({ ...currentUser, username: e.target.value })}
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setCurrentUser({ ...currentUser, password: e.target.value })}
        />
        {auth.loginStatus === "rejected" ? <LoginError /> : null}
        {auth.loginStatus === "pending" ? (
          <Loading />
        ) : (
          <button type="submit">Sign in</button>
        )}
        <p>
          Don't you have an account?{" "}
          <Link className="switch" to="/register">
            Register
          </Link>
        </p>
      </form>
    </FormWrapper>
  );
};

export default Login;
