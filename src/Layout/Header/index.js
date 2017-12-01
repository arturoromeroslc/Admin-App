import React from 'react';
import {
  NavLink
} from 'react-router-dom';

export default function Header() {
  return (
    <div className="main-header">
      <h1>Header</h1>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </div>
  );
}
