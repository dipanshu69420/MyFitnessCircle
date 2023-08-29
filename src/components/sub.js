import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
const Subscribe = () => {
  const navigate = useNavigate();
  return (
<div>
  <Navbar />
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Pricing Card</title>
  <link rel="stylesheet" href="assets/style.css" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous" />
  <div className='wrapper'>
    <br/><br/>
    <h1 className='head'>Subscription Plan</h1>
  <br /><br/> <br /><br />
  <div className="pricing-card-container">
    <div className="pricing-cards">
      <div className="pricingCard">
        <div className="pricingCard-title">
          <h1 className='silver'>Silver Subscription</h1>
        </div>
        <div className="pricingCard-pricing">
          Rs<label className="price">500</label>/Month
        </div> 
        <a href="#" className="pricingCard-basket" style={{fontSize: '15px'}}>
          Subscribe Now
        </a>
        <div className="pricingCard-properties">
          <p>
            <div className="prop" style={{color: '#00b67a'}} />
            Reminder for the Workout
          </p>
          <p>
            <div className="prop" style={{color: '#00b67a'}} />
            Basic Diet Plan 
          </p>
        </div>
      </div>{/* pricingCard */}
      <div className="pricingCard">
          <h1 className='gold'>Gold Subscription</h1>
        <div className="pricingCard-pricing">
          Rs<label className="price" style={{alignItem: 'left'}}>700</label>/Month
        </div>
        <a href="sepet.html" className="pricingCard-basket" style={{fontSize: '15px'}}>
          Subscribe Now
        </a>
        <div className="pricingCard-properties">
          <p>
            <i className="fas" style={{color: '#00b67a'}} />
            Reminder for the Workout
          </p>
          <p>
            <i className="fas" style={{color: '#00b67a'}} />
            Access to Basic and Semi-Premium <br />Diet Plans
          </p>
          <p>
            <i className="fas" style={{color: '#00b67a'}} />
            Access to join Local Groups in your Area
          </p>
        </div>
      </div>{/* pricingCard */}
      <div className="pricingCard">
        <div className="pricingCard-title">
          <h1 className='plat'>Platinum Subscription</h1>
        </div>
        <div className="pricingCard-pricing">
          Rs<label className="price">900</label>/Month
        </div>
        <a href="sepet.html" className="pricingCard-basket" style={{fontSize: '15px'}}>
          Subscribe Now
        </a>
        <div className="pricingCard-properties">
          <p>
            <div className="prop" style={{color: '#00b67a'}} />
            Reminder for the Workout
          </p>
          <p>
            <div className="prop" style={{color: '#00b67a'}} />
            Access to Basic and Semi-Premium <br />Diet Plans
          </p>
          <p>
            <div className="prop" style={{color: '#00b67a'}} />
            Access to join Local Groups in your Area
          </p>
          <p>
            <div className="prop" style={{color: '#00b67a'}} />
            Get your Personal Trainer
          </p>
        </div>
      </div>
      <br/><br/>
    </div>
  </div>
  </div><Footer />
</div>
  )
}
export default Subscribe