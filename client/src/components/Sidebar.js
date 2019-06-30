import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <nav id="sidebar" className="min-vh-100 text-center">
    <h2 className="pt-2">Expenser</h2>
    <NavLink exact to="/" className="d-block">dashboard</NavLink>
    <NavLink to="/expense/new" className="d-block">add expense</NavLink>
  </nav>
);

export default Sidebar;
