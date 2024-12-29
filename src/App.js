import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { authRoutes } from "./app/router.js";
import SignIn from "./pages/login.js";
import TopNavigation from "./pages/navigation.js";
import "./app/styles/internal.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
    setIsLoading(false);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("userDetails");
    localStorage.removeItem("registerUser")
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        {isLoggedIn && <TopNavigation onLogout={handleLogout} />}
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? <Navigate to="/profile" replace /> : <SignIn onLogin={handleLogin} />
            }
          />
          {authRoutes?.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              element={isLoggedIn ? route.component :route.path=="/register"?route.component: <Navigate to="/" replace />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
