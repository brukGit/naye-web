// File path: src/components/Vendors.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Vendors.css';

const Vendors = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/onboarding');
  };

  return (
    <div className='container'>
      <h2 className='title'>Join as a Vendor</h2>
      <p className='description'>
        Are you a vendor in the artisanal and creative space? Welcome to our platform!
      </p>
      <button className='button-vendor' onClick={handleNavigate}>
        Get Onboard
      </button>
    </div>
  );
};

export default Vendors;
