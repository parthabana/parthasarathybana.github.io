import React from 'react';

const FeaturedOn = () => {
  return (
    <section style={{ padding: '4rem 2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Featured On</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4rem' }}>
        <img src="https://via.placeholder.com/150x50?text=Logo+1" alt="Logo 1" />
        <img src="https://via.placeholder.com/150x50?text=Logo+2" alt="Logo 2" />
        <img src="https://via.placeholder.com/150x50?text=Logo+3" alt="Logo 3" />
        <img src="https://via.placeholder.com/150x50?text=Logo+4" alt="Logo 4" />
      </div>
    </section>
  );
};

export default FeaturedOn;
