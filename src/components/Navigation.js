import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../Icons';

export default function Navigation() {
  return (
    <nav>
      <h3>Bookstore CMC</h3>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/categories">Categories</Link></li>
      <User />
    </nav>
  );
}
