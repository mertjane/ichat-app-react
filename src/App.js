import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { Container } from "./pages/Pages.styled";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { userId } = useSelector((state) => state.auth);
  const theme = useSelector((state) => state.user.userInfo.theme);

  const ProtectedRoute = ({ children }) => {
    
    if (!userId) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Container theme={theme}>
      <div className="background" />
      <ToastContainer />
      <Routes>
        <Route>
          <Route
            path="/*"
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
