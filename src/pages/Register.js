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
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    if (auth.userId) {
      navigate("/");
    }
  }, [auth.userId, navigate]);

  const [createUser, setCreateUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      createUser.password !== createUser.confirmPassword ||
      createUser.confirmPassword === ""
    ) {
      setPasswordError(true);
    } else {
      dispatch(registerUser(createUser));
      setPasswordError(false);
    }
  };

  return (
    <FormWrapper>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h3 className="logo register">iChat Web</h3>
        Register
        <input
          placeholder="Username"
          type="text"
          onChange={(e) =>
            setCreateUser({ ...createUser, username: e.target.value })
          }
        />
        <input
          placeholder="Email"
          type="text"
          onChange={(e) =>
            setCreateUser({ ...createUser, email: e.target.value })
          }
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) =>
            setCreateUser({ ...createUser, password: e.target.value })
          }
        />
        <input
          placeholder="Confirm password"
          type="password"
          onChange={(e) =>
            setCreateUser({ ...createUser, confirmPassword: e.target.value })
          }
        />
        {passwordError && (
          <span style={{ color: "red" }}>Passwords do not match!</span>
        )}
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
