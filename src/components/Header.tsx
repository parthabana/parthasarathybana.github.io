import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggleButton from './ThemeToggleButton';

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo">
        <Link to="/">Partha</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <ThemeToggleButton />
      </nav>
    </header>
  );
};

export default Header;