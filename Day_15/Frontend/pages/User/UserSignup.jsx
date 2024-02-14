import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import "./UserSignup.css";
import Navbar from "../../components/Nav";
// import axios from "../../../services/axios/axios";
// import {UserSignupAction} from '../../../services/redux/action/userSignup'

const Signup = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      mobile: "",
      password: "",
    });
  
    const navigate = useNavigate();
  
    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const existingUsers =
        JSON.parse(localStorage.getItem("registeredUsers")) || [];
      existingUsers.push(formData);
      localStorage.setItem("registeredUsers", JSON.stringify(existingUsers));
      setFormData({
        name: "",
        email: "",
        mobile: "",
        password: "",
      });
      alert("Registration successful!");
      navigate("/login");
    };
  function adminLogIn(){
    navigate('/adlog')
  }

    return (
        <div>
            <Navbar />
            <div className="signup-container">
                <div className="signup-form">
                    <div className="signup">
                        <div className="heading">
                            <h1>Signup Now</h1>
                        </div>
                        <form onSubmit={handleSubmit}>
                        <div>
                                <input
                                    type="text"
                                    className="input"
                                    name="name"
                                    placeholder="Enter your name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    className="input"
                                    name="email"
                                    placeholder="Enter your email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className="input"
                                    name="mobile"
                                    placeholder="Enter your number"
                                    required
                                    value={formData.mobile}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    className="input"
                                    name="password"
                                    placeholder="Create a password"
                                    required
                                    value={formData.password}
                                     onChange={handleInputChange}
                                />
                            </div>
                            {/* <div className="image-selection">
                                <label htmlFor="fileInput" className="custom-file-upload">
                                    {image?"Choose another photo":"Select a profile Photo"}
                                </label>
                                <input
                                    className="file-input"
                                    type="file"
                                    name="image"
                                    id="fileInput"
                                    required
                                    onChange={handleImageChange}
                                    style={{display: "none"}}
                                />
                            </div>
                            <div>
                                {image && (
                                    <img
                                        style={{ width: "auto", height: "100px", margin: "5px 0 15px 0" }}
                                        src={viewImage}
                                        alt="profile-image"
                                        className="profile-image"
                                    />
                                )} */}
                            {/* </div> */}
                            <button>Signup Now</button>
                        </form>
                        <p>
                            Already registered?{" "}
                            <span
                                onClick={() => {
                                    navigate("/");
                                }}
                            >
                                Login here
                            </span>
                        </p>
                    </div>
                    <div className="signup-image">
                        <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?w=740&t=st=1689949881~exp=1689950481~hmac=58560ad660e25612b606680a6bdc8653304832d1d1ecc9a86b0857d6dee6af83" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;