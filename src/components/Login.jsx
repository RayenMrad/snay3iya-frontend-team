import React, { useState } from "react";
import axios from "axios"; // Import Axios
import { Link } from "react-router-dom"; // Import Link
import "../styles/Login.css"; // Importez le fichier CSS

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const data = { email, password, rememberMe };

    try {
      // Using Axios to send the POST request
      const response = await axios.post(
        "http://localhost:5000/api/login",
        data
      );

      if (response.status === 200) {
        console.log("Login successful", response.data);
      } else {
        console.log("Login failed", response.data);
      }
    } catch (error) {
      console.log("Error logging in", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="/assets/images/logo.png" className="logo" />
        <h1 className="login-title">Welcome!</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group remember-me">
            <input
              type="checkbox"
              id="rememberMe"
              className="form-checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="rememberMe" className="remember-me-label">
              Remember me
            </label>
          </div>
          <div className="form-group">
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
          <div className="text-center">
            <a href="#" className="forgot-password">
              Forget Password?
            </a>
          </div>
        </form>
        <p className="register-link">
          Don’t have an Account?{" "}
          <Link to="/register" className="register-link">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
