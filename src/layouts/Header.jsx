import React, { useState } from "react"; 
import { RiMenu2Line, RiCloseLine } from "react-icons/ri"; 
import {Link,NavLink} from "react-router-dom"

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 bg-white shadow-md w-full relative">
      <div className="container max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo section */}
        <div className="pl-4">
          <Link to="/">
            <img
              src="/assets/muktinath.png"
              className="w-32 object-contain" 
              alt="Logo"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="text-md hidden lg:flex items-center">
          <ul className="flex space-x-10">
            <li className="hover:text-one transition-colors cursor-pointer">
              <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
            </li>
            <li className="hover:text-one transition-colors cursor-pointer">
              <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
            </li>
            <li className="hover:text-one transition-colors cursor-pointer">
              <NavLink to="/services" onClick={() => setIsOpen(false)}>Services</NavLink>
            </li>
            <li className="hover:text-one transition-colors cursor-pointer">
              <NavLink to="/products" onClick={() => setIsOpen(false)}>Products</NavLink>
            </li>
          </ul>
        </div>

        {/* Mobile Button */}
        <div className="flex items-center lg:hidden">
          <button
            className="text-3xl text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <RiCloseLine /> : <RiMenu2Line />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-two text-white p-6 flex flex-col space-y-4 z-50 shadow-lg">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-Five">
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-Five">
            About
          </Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="hover:text-Five">
            Services
          </Link>
          <Link to="/products" onClick={() => setIsOpen(false)} className="hover:text-Five">
            Products
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Header;