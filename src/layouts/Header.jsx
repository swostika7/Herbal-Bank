import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 border-b border-gray-200">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo Section */}
          <div className="shrink-0">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <img
                src="/assets/muktinath.png"
                className="h-10 lg:h-12 w-auto object-contain"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            <NavLink to="/">Home</NavLink>

            <NavLink to="/about">About</NavLink>

            <NavLink to="/services">Services</NavLink>

            <NavLink to="/products">Products</NavLink>
          </div>

          {/* Mobile Button */}
          <div className="lg:hidden flex items-center">
            <button
              className="text-3xl text-gray-800 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label=" Menu"
            >
              {isOpen ? <RiCloseLine /> : <RiMenu2Line />}
            </button>
          </div>
        </div>

        {/* Mobile  Dropdown */}
        {isOpen && (
          <div className="lg:hidden flex flex-col space-y-2 bg-two text-white">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 hover:text-one font-medium border-gray-50"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 hover:text-one font-medium border-gray-50"
            >
              About
            </Link>
            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 hover:text-one font-medium border-gray-50"
            >
              Services
            </Link>
            <Link
              to="/products"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 hover:text-one font-medium border-gray-50"
            >
              Products
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
