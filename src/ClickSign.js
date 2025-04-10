import { left } from 'inquirer/lib/utils/readline';
import React from 'react';

const SlantedClickHereSign = () => {
  return (
    <div
      style={{
        display: 'inline-block',
        fontSize: '1.2rem',
        color: '#ff6f61',
        // padding: '15px',
        // backgroundColor: '#ff6f61',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: '2px',
        borderRadius: '10px',
        textAlign: 'center',
        transform: 'rotate(-20deg)', // Slanted effect
        // boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.3)',
        position: 'relative',
        marginTop:'5rem',
        marginLeft: '20rem',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotate(-10deg) scale(1.1)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'rotate(-10deg)')}
    >
      Click This Button<span style={{ display: 'block', fontSize: '2rem', marginTop: '2px' }}>↓</span>
    </div>
  );
};

export default SlantedClickHereSign;


