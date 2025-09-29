import React from 'react';

const WhatIDo = () => {
  return (
    <section className="what-i-do-section">
      <h2>What I Do</h2>
      <div className="cards-container">
        <div className="card">
          <h3>Frontend Development</h3>
          <p>I build beautiful and responsive user interfaces with React.</p>
        </div>
        <div className="card">
          <h3>Backend Engineering</h3>
          <p>I design and build scalable and reliable backend systems.</p>
        </div>
        <div className="card">
          <h3>Open-Source Contribution</h3>
          <p>I love contributing to open-source projects.</p>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;