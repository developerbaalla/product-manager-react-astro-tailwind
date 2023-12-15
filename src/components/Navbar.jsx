// src/components/Navbar.js
import React from 'react';
// import { Link } from 'astro';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white font-bold text-lg">Product Manager</a>
        <div className="space-x-4">
          <a href="/" className="text-white">Home</a>
          <a href="#" className="text-white">About</a>
          <a href="#" className="text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
