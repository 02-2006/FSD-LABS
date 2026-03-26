import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#eee', textAlign: 'center' }}>
      <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
      <Link to="/about" style={{ marginRight: '15px' }}>About</Link>
      <Link to="/portfolio">Portfolio</Link>
    </nav>
  );
}

export default Navbar;