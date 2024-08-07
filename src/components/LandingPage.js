import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './AppContext';
import landingPagePromo from '../assets/images/landing-promo.jpg';

import '../styles/LandingPage.css';
import logo from '../assets/images/logo.png';
import bgimg from '../assets/images/promo/2.png';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUserLogged } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    setUserLogged(true);
    navigate('/home');
  };

  useEffect(()=>{
    console.log("Rendering LandingPage");

  }, [])


  return (
    <div className="landing-page">
      <div className="promo-section">
        <img src={landingPagePromo} alt="Landing page promo" className="promo-image" 
        onError={(e) => {
    console.error("Failed to load image:", e);
    e.target.style.display = 'none';
  }}
  />
        {/* <button onClick={() => navigate('/home')} className="cta-button">
          See our collections
        </button> */}
        <h2 className="promo-text">Made locally with love.</h2>
      </div>
      <div className="login-section">
        <img src={logo} alt="Logo" className="logo" />
        <img src={bgimg} alt="Background image" className="bg-image" />
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <button onClick={handleLogin} className="login-button">
          Login
        </button>
        <p className="signup-text">
          Don't have an account?{' '}
          <span onClick={() => navigate('/signup')} className="signup-link">
            Sign Up
          </span>
        </p>
        <button onClick={() => navigate('/home')} className="skip-button">
          Skip for now
        </button>
      </div>
    </div>
  );
};

export default LandingPage;