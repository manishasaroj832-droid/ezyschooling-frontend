import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {

    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "https://ezyschooling-backend-production.up.railway.app/api/auth/login",
        {
          email: email,
          password: password
        }
      );

      alert(response.data);

      navigate("/");

    } catch (error) {

      if (error.response) {
        alert(error.response.data);
      } else {
        alert("Server is not running");
      }

    }
  };

  return (
    <div className="login-page">

      <div className="login-box">

        <h2>Login</h2>
        <p className="login-subtitle">Login to your account</p>

        <form onSubmit={handleLogin}>

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit"  >
            Login
          </button>

        </form>

        <p className="signup-text">
          Don't have an account?
         <span onClick={()=>{navigate("/signup")}}> Sign Up</span> 
        </p>

      </div>

    </div>
  );
};

export default Login;