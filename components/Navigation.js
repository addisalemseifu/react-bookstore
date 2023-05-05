import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/categories">Categories</Link></li>
    </div>
  );
}
