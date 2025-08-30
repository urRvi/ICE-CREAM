import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Food Explorer</Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link to="/recipes" className="hover:text-gray-400">Recipes</Link></li>
          <li><Link to="/ingredients" className="hover:text-gray-400">Ingredients</Link></li>
          <li><Link to="/places" className="hover:text-gray-400">Places</Link></li>
          <li><Link to="/calories" className="hover:text-gray-400">Calories</Link></li>
          <li><Link to="/upload" className="hover:text-gray-400">Upload</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
