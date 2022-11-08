import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/services";
import { FormWrapper } from "./Pages.styled";
import { Link, useNavigate } from "react-router-dom";
import LoginError from "../components/Error/LoginError";
import Loading from "../components/Loading/Loading";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (auth._id) {
      navigate("/");
    }
  }, [auth._id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(user)
    dispatch(loginUser(user));
  };

  return (
    <FormWrapper>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="logo" />
        <span>Login</span>
        <input
          placeholder="Username"
          type="text"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
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
