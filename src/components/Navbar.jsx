import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="bg-black text-white h-20 sticky top-0 z-50 shadow-sm border-b border-gray-900">
      {/* CHANGED: max-w-7xl to max-w-[95%] to push elements to the sides */}
      <div className="w-full max-w-[95%] mx-auto px-4 md:px-6 h-full flex justify-between items-center">
        
        {/* Logo Image */}
        <NavLink to="/" onClick={closeMenu} className="flex items-center">
          <img 
            src="/Logo.png" 
            alt="TEDxIKGPTU" 
            className="h-10 w-auto object-contain" // Adjust h-10 to fit your logo aspect ratio
          />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-10 text-sm font-semibold tracking-wide">
            <li><NavLink to="/" className={({isActive}) => isActive ? "text-ted-red" : "text-white hover:text-ted-red transition-colors"}>Home</NavLink></li>
            <li><NavLink to="/about" className={({isActive}) => isActive ? "text-ted-red" : "text-white hover:text-ted-red transition-colors"}>About</NavLink></li>
            <li><NavLink to="/speakers" className={({isActive}) => isActive ? "text-ted-red" : "text-white hover:text-ted-red transition-colors"}>Speakers</NavLink></li>
            <li><NavLink to="/rules" className={({isActive}) => isActive ? "text-ted-red" : "text-white hover:text-ted-red transition-colors"}>Rules</NavLink></li>
          </ul>
          <button 
            onClick={() => navigate('/nomination')}
            className="bg-ted-red hover:bg-red-700 text-white text-sm font-bold py-2 px-6 rounded-md transition-colors shadow-md hover:shadow-lg"
          >
            REGISTER
          </button>
        </div>

        {/* Mobile Hamburger (White bars on black bg) */}
        <button className="md:hidden p-2 text-white" onClick={toggleMenu}>
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black border-t border-gray-900 p-6 flex flex-col gap-6 md:hidden shadow-xl">
          <ul className="flex flex-col gap-4 text-center text-lg font-medium">
            <li><NavLink to="/" onClick={closeMenu} className={({isActive}) => isActive ? "text-ted-red" : "text-white"}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={closeMenu} className={({isActive}) => isActive ? "text-ted-red" : "text-white"}>About</NavLink></li>
            <li><NavLink to="/speakers" onClick={closeMenu} className={({isActive}) => isActive ? "text-ted-red" : "text-white"}>Speakers</NavLink></li>
            <li><NavLink to="/rules" onClick={closeMenu} className={({isActive}) => isActive ? "text-ted-red" : "text-white"}>Rules</NavLink></li>
          </ul>
          <button 
            onClick={() => { navigate('/nomination'); closeMenu(); }}
            className="bg-ted-red text-white py-3 rounded-md font-bold w-full shadow-md"
          >
            REGISTER NOW
          </button>
        </div>
      )}
    </nav>
  );
}