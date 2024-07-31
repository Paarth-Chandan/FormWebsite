import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Success from "./Success";

const Login = () => {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = {
      username: data.get("username"),
      password: data.get("password"),
    };
    console.log(formData);
    setFormData(formData);

    try {
      const response = await axios.get(
        `http://localhost:8080/api/users/${formData.username}`
      );
      console.log("Registration successful:", response.data);
      setResponseData(response.data);

      if (response.data.password === formData.password) {
        // Successful login, handle accordingly
        console.log("Login successful with matching password");
        navigate(`/success/${response.data.fullName}`);
        <Success userData={response.data} />;
      } else {
        // Handle password mismatch
        setError("Incorrect username or password");
      }
    } catch (error) {
      console.error("Registration failed:", error.response.data);

      if (error.response && error.response.status === 404) {
        setError("Incorrect username or password"); // Set error message for 404 (Not Found)
      } else {
        setError("An error occurred. Please try again."); // Generic error message for other errors
      }
    }
  };

  //   console.log(responseData.password);

  return (
    <div>
      <div className="container">
        <div className="title">Login</div>
        <form onSubmit={handleSubmit}>
          <div
            className="user-details"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="input-box" style={{ width: "100%" }}>
              <span className="details">Username</span>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="input-box" style={{ width: "100%" }}>
              <span className="details">Password</span>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          {error && (
            <div className="error-message" style={{ color: "red" }}>
              {error}
            </div>
          )}
          <div className="button">
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
