import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
                </li>
            <li><Link to="/aboutPage">About</Link></li>
            <li><Link to="/countriesPage">Countries</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/country">Country</Link></li>
        </ul>
    </nav>
  );
}

