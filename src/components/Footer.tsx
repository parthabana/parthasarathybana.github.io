import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '2rem', background: '#fff', borderTop: '1px solid #eaeaea' }}>
      <div>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 1rem', color: '#555' }}>Twitter</a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 1rem', color: '#555' }}>YouTube</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 1rem', color: '#555' }}>LinkedIn</a>
      </div>
      <p style={{ color: '#777', marginTop: '1rem' }}>&copy; 2025 Partha. All rights reserved.</p>
    </footer>
  );
};

export default Footer;