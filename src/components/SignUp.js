import React from 'react';

import '../components/SignUpForm.css'// Import the corresponding CSS file
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function SignUpForm() {
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [Age, setAge] = React.useState("");
  const [number, setNumber] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming the API endpoint for registration is http://localhost:5000/register
    axios.post("http://localhost:5000/register", {
      fname,
      lname,
      email,
      password,
      Age,
      number,
    })
    .then((response) => {
      console.log(response.data, "userRegister");
      if (response.data.status === "ok") {
        alert("Registration Successful");
      } else {
        alert("Something went wrong");
      }
    })
    .catch((error) => {
      console.error("Error occurred during registration:", error);
      alert("Something went wrong");
    });
  };

  return (
    <main className="card-container slideUp-animation">
       <div className="image-container">
        <h1 className="company">
          Fitness Circle <sup>&trade;</sup>
        </h1>
        <img src="" className="illustration" alt="" />
        <p className="quote"> </p>
        <a href="#btm" className="mobile-btm-nav">
          <img src="./assets/images/dbl-arrow.png" alt="" id='image'/>
        </a>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h3 className="form-header">Sign Up</h3>

          <div className="input-container">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>

          <div className="input-container">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              required
            />
          </div>

          <div className="input-container">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-container">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-container">
            <label>Age</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter age"
              value={Age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>

          <div className="input-container">
            <label>Phone</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </div>

          <div className="d-grid">
            <button type="submit" className=".submit-btn" style={{ backgroundColor: '#ffdb7f' }}>
              Sign Up
            </button>
          </div>
          <p className="btn-text">
            Already have an account..?{' '}
            <Link to="/login" style={{ textDecoration: 'none', color: '#3A1212', cursor: 'pointer' }}>
              Login
            </Link>
          </p>
        </form>
      </div>
      <div className="image-container">
        <img src="src/assets/images/gym.jpg"/>
      </div>
    </main>
  );
}
