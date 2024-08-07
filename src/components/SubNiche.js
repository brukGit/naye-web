// File path: src/components/Prompt.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/SubNiche.css';

const prompts = [
  { text: 'For her', top: '15%', left: '10%' },
  { text: 'For you', top: '30%', left: '60%' },
  { text: 'For him', top: '50%', left: '20%' },
  { text: 'For dad', top: '70%', left: '50%' },
  { text: 'For Mom', top: '25%', left: '40%' },
  { text: 'For kids', top: '60%', left: '80%' },
  { text: 'Wedding', top: '40%', left: '70%' },
  { text: 'Birthday', top: '80%', left: '30%' },
];

const SubNiche = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/gifts');
  };

  return (
    <div className='subNicheContainer'>
      {prompts.map((prompt, index) => (
        <button
          key={index}
          className='prompt'
          onClick={handleNavigate}
        >
          {prompt.text}
        </button>
      ))}
    </div>
  );
};

export default SubNiche;
