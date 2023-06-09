import React from 'react';
import './Login.css'; // Import the corresponding CSS file
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  return (
    <main className="card-container slideUp-animation">
      <div className="image-container">
        <h1 className="company">
          Fitness Freak <sup>&trade;</sup>
        </h1>
        <img src="src/assets/css/banner.png" className="illustration" alt="" />
        <p className="quote">Aee Vedya fit ho ja..!</p>
        <a href="#btm" className="mobile-btm-nav">
          <img src="./assets/images/dbl-arrow.png" alt="" />
        </a>
      </div>
      <form action="" method="">
        <div className="form-container slideRight-animation">
          <h1 className="form-header">Login to Account</h1>

          <div className="input-container">
            <label htmlFor="f-name"></label>
            <input type="text" name="f-name" id="f-name" required />
            <span>E-mail/Number</span>
            <div className="error"></div>
          </div>

          <div className="input-container">
            <label htmlFor="f-name"></label>
            <input type="password" name="f-name" id="f-name" required />
            <span>Password</span>
            <div className="error"></div>
          </div>

          
          <div id="btm">
          <button type="submit" className="submit-btn" style={{ backgroundColor: '#ffdb7f' }} onClick={() => navigate('/home')}>
              Login
            </button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Login;