import React from 'react';
import { Link } from 'react-router-dom';
import WhatIDo from './WhatIDo';
import FeaturedOn from './FeaturedOn';

const Home = () => {
  return (
    <>
      <section className="hero-section">
        <img src="https://via.placeholder.com/150" alt="Partha" className="profile-pic" />
        <h1>I'm Partha, a Software Engineer & Creator</h1>
        <p>
          I write about productivity, tech, and building a life you love.
          I'm also the founder of a cool startup.
        </p>
        <Link to="/contact" className="cta-button">
          Get In Touch
        </Link>
      </section>
      <WhatIDo />
      <FeaturedOn />
    </>
  );
};

export default Home;