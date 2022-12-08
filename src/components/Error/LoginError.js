import { useSelector } from "react-redux";
import styled from "styled-components";

const ErrorText = styled.p`
  text-align: center;
  color: red;
`;

const LoginError = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <ErrorText>
     {auth.loginError}
    </ErrorText>
  );
};

export default LoginError;