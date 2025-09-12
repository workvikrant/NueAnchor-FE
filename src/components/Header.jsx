import React from 'react';
import { Anchor } from 'lucide-react';
import logo from "../assets/LandingPage/neuanchorlogo.svg";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/brands", label: "Our Brands" },
    { to: "/aboutUs", label: "About Us" },
    { to: "/news", label: "News & Insights" },
    { to: "/contact", label: "Contact Us" }
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-200 py-3 px-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div>
            <img 
              src={logo}
              alt="NeuAnchor logo"
              className="w-full h-11 object-cover"
            />
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative text-gray-700 font-medium transition-colors duration-200 hover:text-blue-600
                ${location.pathname === link.to ? 'text-blue-600' : ''}
              `}
            >
              {link.label}
              {location.pathname === link.to && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600 rounded"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;