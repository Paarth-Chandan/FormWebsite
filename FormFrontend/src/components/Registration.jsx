import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate, useNavigation } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = {
      fullName: data.get("fullName"),
      username: data.get("username"),
      email: data.get("email"),
      phoneNumber: data.get("phoneNumber"),
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
      gender: data.get("gender"),
    };
    console.log(formData);
    setFormData(formData);

    try {
      const response = await axios.post("http://localhost:8080/api", formData);
      console.log("Registration successful:", response.data);

      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error.response.data);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="title">Register</div>
        <form onSubmit={handleSubmit}>
          <div className="user-details">
            <div className="input-box">
              <span className="details">Full Name</span>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Username</span>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Email</span>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Phone Number</span>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Password</span>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Confirm password</span>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                required
              />
            </div>
          </div>
          <div className="gender-details">
            <input type="radio" name="gender" id="dot-1" value="Male" />
            <input type="radio" name="gender" id="dot-2" value="Female" />
            <input
              type="radio"
              name="gender"
              id="dot-3"
              value="Prefer not to say"
            />
            <span className="gender-title">Gender</span>
            <div className="category">
              <label htmlFor="dot-1">
                <span className="dot one"></span>
                <span className="gender">Male</span>
              </label>
              <label htmlFor="dot-2">
                <span className="dot two"></span>
                <span className="gender">Female</span>
              </label>
              <label htmlFor="dot-3">
                <span className="dot three"></span>
                <span className="gender">Prefer not to say</span>
              </label>
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
