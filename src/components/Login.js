import React from 'react';
import './Login.css'; // Import the corresponding CSS file
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login-user', {
        email,
        password,
      });

      if (response.data.status === 'ok') {
        // Save the token to local storage or any state management tool (e.g., Redux, React Context)
        const token = response.data.data;
        // Save the token to local storage for example
        localStorage.setItem('token', token);

        // Navigate to the '/sub' route on successful login
        navigate('/sub');
      } else {
        // Handle login error
        console.log('Login failed');
      }
    } catch (error) {
      // Handle API error
      console.error('Error logging in:', error);
    }
  };
  return (
    <main className="card-container slideUp-animation">
      <div className="image-container">
        <h1 className="company">
          Fitness Circle <sup>&trade;</sup>
        </h1>
        <img src="src/assets/css/banner.png" className="illustration" alt="" />
        {/* <p className="quote">Aee Vedya fit ho ja..!</p> */}
        <a href="#btm" className="mobile-btm-nav">
          <img src="./assets/images/dbl-arrow.png" alt="" />
        </a>
      </div>
      <form onSubmit={handleLogin}>
      <div className="form-container slideRight-animation">
        <h1 className="form-header">Login to Account</h1>

        <div className="input-container">
          <label htmlFor="email"></label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span>E-mail/Number</span>
          <div className="error"></div>
        </div>

        <div className="input-container">
          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span>Password</span>
          <div className="error"></div>
        </div>

        <div id="btm">
          <button
            type="submit"
            className="submit-btn"
            style={{ backgroundColor: '#ffdb7f' }}
          >
            Login
          </button>
        </div>
      </div>
    </form>
    </main>
  );
};

export default Login;