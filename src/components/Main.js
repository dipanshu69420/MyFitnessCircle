import React from 'react';
import './main.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const navigate = useNavigate();
    return (
      <div>
        <header id="header" className="vh-100 flex">
          <div className="container">
            <div className="header-content">
              <h1 style={{paddingLeft: '32px'}}>
                Fitness Freak <br />
                <span
                  className="typewrite"
                  data-loop="yes"
                  data-speed="100"
                  data-delay="2000"
                  data-words='["Visual Artist", "Photographer", "Cinematographer"]'
                ></span>
              </h1>
              <h2 style={{ fontSize: '30px', paddingTop: '12px', color: 'white' }}>Get Started With Your Fitness Journey</h2>
                <button type="submit" className="submit-btn" style={{ backgroundColor: '#ffdb7f' , marginLeft:'150px'}} onClick={() => navigate('/signup')}>
              Get Started
            </button>
            </div>
          </div>
        </header>

        {/* Add the rest of the HTML code here */}

      </div>
    );
  }
export default MainPage;
