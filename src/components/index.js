import React from 'react';
import '../assets/style.css';
import { useNavigate } from 'react-router-dom';
const PricingCard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Subscription Plans</h1>
      <div className="pricing-card-container">
        <div className="pricing-cards">
          <div className="pricingCard">
            <div className="pricingCard-title">
              <h3>Silver Pack</h3>

              <p>Start your Fitness Journey with Silver Subscription</p>
            </div>
            <div className="pricingCard-pricing">
              Rs<span className="price">500</span>/Month
            </div>
            <a href="sepet.html" className="pricingCard-basket">
              Subscribe Now
            </a>
            <div className="pricingCard-properties">
              <p>
                <i className="fas fa-check" style={{ color: '#00b67a' }}></i>
                Reminder for the Workout
              </p>
              <p>
                <i className="fas fa-check" style={{ color: '#00b67a' }}></i>
                <strong>Basic</strong> Diet Plan
              </p>
            </div>
          </div>


          <div className="pricingCard">
            <div className="pricingCard-title">
              <h3>Platinum Subscription</h3>
            </div>
            <div className="pricingCard-pricing">
              Rs<span className="price">900</span>/Month
            </div>
            <button type="submit" className="submit-btn" style={{ backgroundColor: '#ffdb7f' }} onClick={() => navigate('/')}> Subscribe Now </button>
            <p className="pricingCard-refresh"></p>
            <div className="pricingCard-properties">
              <p>
                <i className="fas fa-check" style={{ color: '#00b67a' }}></i>
                Reminder for the Workout
              </p>
              <p>
                <i className="fas fa-check" style={{ color: '#00b67a' }}></i>
                Access to Basic and Semi-Premium Diet Plans
              </p>
              <p>
                <i className="fas fa-check" style={{ color: '#00b67a' }}></i>
                Access to join Local Groups in your Area
              </p>
              <p>
                <i className="fas fa-check" style={{ color: '#00b67a' }}></i>
                Get your Personal Trainer
              </p>
            </div>
          </div>



          <div className="pricingCard orta centers">
            <div className="pricingCard-title">
              <h3>Gold Subscription</h3>
              <p>
                Start your Fitness Journey with Gold Subscription and Enjoy your Fitness Journey
              </p>
            </div>
            <div className="pricingCard-pricing">
              Rs<span className="price">700</span>/Month
            </div>
            <a href="sepet.html" className="pricingCard-basket">
              Subscribe Now
            </a>
            <div className="pricingCard-properties">
              <p>
                <i className="fas fa-check" style={{ color: '#00b67a' }}></i>
                Reminder for the Workout
              </p>
              <p>
                <i className="fas fa-check" style={{ color: '#00b67a' }}></i>
                Access to Basic and Semi-Premium Diet Plans
              </p>
              <p>
                <i className="fas fa-check" style={{ color: '#00b67a' }}></i>
                Access to join Local Groups in your Area
              </p>
            </div>
          </div>

          <div className="pricingCard">
            <div className="pricingCard-title">
              <h3>Platinum Subscription</h3>
              <p>
                Start your Fitness Journey with Platinum Subscription and Enjoy your Ultimate Fitness Journey
              </p>
            </div>
            <div className="pricingCard-pricing">
              Rs<span className="price">900</span>/Month
            </div>
            <button type="submit" className="submit-btn" style={{ backgroundColor: '#ffdb7f' }} onClick={() => navigate('/')}> Subscribe Now </button>
            <p className="pricingCard-refresh"></p>
            <div className="pricingCard-properties">
              <p>
                <i className="fas fa-check" style={{ color: '#00b67a' }}></i>
                Reminder for the Workout
              </p>
              <p>
                <i className="fas fa-check" style={{ color: '#00b67a' }}></i>
                Access to Basic and Semi-Premium Diet Plans
              </p>
              <p>
                <i className="fas fa-check" style={{ color: '#00b67a' }}></i>
                Access to join Local Groups in your Area
              </p>
              <p>
                <i className="fas fa-check" style={{ color: '#00b67a' }}></i>
                Get your Personal Trainer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
