import { useSelector } from "react-redux";
import styled from "styled-components";

const ErrorText = styled.p`
  text-align: center;
  color: red;
`;

const RegisterError = () => {
  const user = useSelector((state) => state.user);
  return (
    <ErrorText>
     {user.registerError}
    </ErrorText>
  );
};

export default RegisterError;
