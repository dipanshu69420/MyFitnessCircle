import React from 'react';
import './SignUpForm.css'; // Import the corresponding CSS file
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const SignUp = () => {
  const navigate = useNavigate();
  return (
    <main className="card-container slideUp-animation">
      <div className="image-container">
        <h1 className="company">
          Fitness Freak <sup>&trade;</sup>
        </h1>
        <img src="" className="illustration" alt="" />
        <p className="quote">Aee Vedya fit ho ja..!</p>
        <a href="#btm" className="mobile-btm-nav">
          <img src="./assets/images/dbl-arrow.png" alt="" id='image'/>
        </a>
      </div>
      <form action="" method="">
        <div className="form-container slideRight-animation">
          <h1 className="form-header">Get started</h1>

          <div className="input-container">
            <label htmlFor="f-name"></label>
            <input type="text" name="f-name" id="f-name" required />
            <span>First name</span>
            <div className="error"></div>
          </div>

          <div className="input-container">
            <label htmlFor="f-name"></label>
            <input type="text" name="f-name" id="f-name" required />
            <span>Last Name</span>
            <div className="error"></div>
          </div>

          <div className="input-container">
            <label htmlFor="f-name"></label>
            <input type="text" name="f-name" id="f-name" required />
            <span>E-Mail</span>
            <div className="error"></div>
          </div>
          <div className="input-container">
            <label htmlFor="f-name"></label>
            <input type="password" name="f-name" id="f-name" required />
            <span>Password</span>
            <div className="error"></div>
          </div>
          <div className="input-container">
            <label htmlFor="f-name"></label>
            <input type="text" name="f-name" id="f-name" required />
            <span>Number</span>
            <div className="error"></div>
          </div>
          <div className="input-container">
            <label htmlFor="f-name"></label>
            <input type="age" name="f-name" id="f-name" required />
            <span>Age</span>
            <div className="error"></div>
          </div>
          <div id="btm">
            <button type="submit" className="submit-btn" style={{ backgroundColor: '#ffdb7f' }}>
              Create Account
            </button>
            <p className="btm-text">
              Already have an account..? < Link
        to="/login"
        style={{ textDecoration: 'none', color: '#3A1212' , cursor:'pointer'}}
      >
        Login
      </Link>
            </p>
          </div>
        </div>
      </form>
    </main>
  );
};

export default SignUp;