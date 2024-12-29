import React, { useState } from "react";
import Input from "../Component/input";
import { useNavigate } from "react-router-dom";

const SignIn = (props) => {
  const { onLogin } = props;
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const getUserList = async() => {
    try {
      const response = await fetch(`http://localhost:3001/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      localStorage.setItem("registerUser",JSON.stringify(data));
    } catch (error) {
      console.error("Error registering user:", error);
    }
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    const {username,password} =credentials;
    try {
      const response = await fetch(`http://localhost:3001/users?username=${username}`);
  
      if (!response.ok) throw new Error("Invalid credentials");
      const data = await response.json();
      const psw = data.find((user) => user.password === password);
      const user = data.find((user) => user.username === username);
      if (psw && user) {
        const token = btoa(`${user.username}:${user.password}`);
        localStorage.setItem("token", token);
        localStorage.setItem("username",user.username);
        localStorage.setItem("email",user.email);
        localStorage.setItem("userDetails",JSON.stringify(user));
        alert("Login successful!");
        onLogin();
        getUserList();
        navigate("/profile");
      } else {
        alert("Invalid credentials");
      }
     
    } catch (error) {
      // alert(error.message);
      console.log(error)
    }
  };
  

  // Redirect if already logged in
  if (localStorage.getItem("token")) {
    navigate("/profile", { replace: true });
    return null;
  }

  return (
    <div className="login_container">
      <div className="loginCard">
        <h2>Login</h2>
        <form className="login_form">
          <Input
            type="username"
            name="username"
            label="Username"
            value={credentials.username}
            onChange={handleInputChange}
            placeholder="Username"
          />
          <Input
            type="password"
            name="password"
            label="Password"
            value={credentials.password}
            onChange={handleInputChange}
            placeholder="Password"
          />
          <div><a href="/register">Register</a></div>
          
          <button type="submit" className="login_btn" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
