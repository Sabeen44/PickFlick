import React, { useState } from 'react';
import icon from './images/movie-icon.png';

const Header = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const toggleAbout = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  return (
    <header className="custom-header" style={{ position: 'relative' }}>
      <img src={icon} alt="Logo" className="header-icon" />
      <h1>Pick Flick By Emoji Click</h1>
      <button className='about-button'
        onClick={toggleAbout}
        
      >
        Learn More
      </button>

      {isAboutOpen && (
        <div
          style={{
            position: 'absolute',
            top: '60px',
            right: '10px',
            width: '350px',
            padding: '20px',
            backgroundColor: 'black',
            border: '1px solid #ccc',
            borderRadius: '5px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 100,
          }}
        >
          <h3>About Pick Flick</h3>
          <p>
            Pick Flick is an app designed to recommend movies based on your emoji mood. Its a fun and interactive way to discover what to watch on popular streaming platforms such as netflix,prime,hulu,peacock. 
        
          </p>
          <button
            onClick={toggleAbout}
            style={{
              marginTop: '10px',
              fontSize: '0.9rem',
              padding: '5px 10px',
              backgroundColor: '#ECEAEA',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Close
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
