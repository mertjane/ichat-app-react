import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #e4e2de;
  display: flex;
  justify-content: center;
  .background {
    width: 100%;
    height: 220px;
    background: #292C6D;
    position: absolute;
  }
`;

const App = () => {
  const auth = useSelector((state) => state.auth);
  const ProtectedRoute = ({ children }) => {
    if (!auth._id) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Container>
      <ToastContainer />
      <div className="background" />
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
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
