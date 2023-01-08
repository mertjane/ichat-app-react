import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Skeleton from "./components/Skeleton/Skeleton";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #e4e2de;
  display: flex;
  justify-content: center;
  .background {
    width: 100%;
    height: 144px;
    background: #00a884;
    position: absolute;
  }
`;

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const auth = useSelector((state) => state.auth);
  const ProtectedRoute = ({ children }) => {
    if (!auth.userId) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
    }, 3000);
    }
  }, [isLoading]);
  

  return (
    <Container>
      <ToastContainer />
      <div className="background" />
      <Routes>
        <Route>
          <Route
            path="/*"
            index
            element={
              <ProtectedRoute>
                {isLoading ? <Skeleton /> : <Home />}
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;
