import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { authRoutes } from "./app/router.js";
import SignIn from "./Assessment/login.js";
import TopNavigation from "./Assessment/topNav.js";
import "./app/CSS/internal.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token")); // Initialize based on token
  const [isLoading, setIsLoading] = useState(true); // To handle initial loading

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
    setIsLoading(false); // Loading complete after token check
  }, []);

  const handleLogin = () => {
    console.log(isLoggedIn);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
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
          {authRoutes.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              element={isLoggedIn ? route.component : <Navigate to="/" replace />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
