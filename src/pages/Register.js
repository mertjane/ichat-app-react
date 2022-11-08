import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormWrapper } from "./Pages.styled";
import { registerUser } from "../features/auth/services";
import { useDispatch, useSelector } from "react-redux";
import RegisterError from "../components/Error/RegisterError";
import Loading from "../components/Loading/Loading";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth._id) {
      navigate("/");
    }
  }, [auth._id, navigate]);

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(user));
    //console.log(auth);
  };

  return (
    <FormWrapper>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="logo" />
        Register
        <input
          placeholder="Username"
          type="text"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <input
          placeholder="Email"
          type="text"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <input
          placeholder="Confirm password"
          type="password"
          onChange={(e) =>
            setUser({ ...user, confirmPassword: e.target.value })
          }
        />
        {auth.registerStatus === "rejected" ? <RegisterError /> : null}
        {auth.registerStatus === "pending" ? (
          <Loading />
        ) : (
          <button type="submit">Sign Up</button>
        )}
        <p>
          Have an account already?{" "}
          <Link className="switch" to="/login">
            Login
          </Link>
        </p>
      </form>
    </FormWrapper>
  );
};

export default Register;
