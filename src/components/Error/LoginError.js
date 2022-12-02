import { useSelector } from "react-redux";
import styled from "styled-components";

const ErrorText = styled.p`
  text-align: center;
  color: red;
`;

const LoginError = () => {
  const user = useSelector((state) => state.user);
  return (
    <ErrorText>
     {user.loginError}
    </ErrorText>
  );
};

export default LoginError;