import React, { useState, useEffect, useRef } from "react";
import { FaInstagram } from "react-icons/fa";
import { LiaFacebook } from "react-icons/lia";
import { CiLinkedin } from "react-icons/ci";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [careerOpen, setCareerOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCareerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  //  mobile navigation
  const closeMobileMenu = () => {
    setIsOpen(false);
    setCareerOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center h-16 lg:h-20 p-4 lg:p-0">
          
          {/* Logo */}
          <Link to="/" onClick={closeMobileMenu}>
            <img
              src="/assets/muktinath.png"
              className="h-10 lg:h-12 w-auto object-contain"
              alt="Logo"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/products">Products</NavLink>

            {/* Career desktop */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setCareerOpen(!careerOpen)}
                className="flex items-center gap-1 font-medium focus:outline-none"
              >
                Career{" "}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    careerOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {careerOpen && (
                <div className="absolute top-full left-0 mt-4 w-56 bg-white shadow-xl rounded-md border py-2 animate-in fade-in zoom-in duration-200">
                  <NavLink
                    to="/openings"
                    onClick={() => setCareerOpen(false)}
                    className="block px-4 py-3 hover:bg-gray-100"
                  >
                    Openings
                  </NavLink>
                  <NavLink
                    to="/working"
                    onClick={() => setCareerOpen(false)}
                    className="block px-4 py-3 hover:bg-gray-100"
                  >
                    Working At Muktinath
                  </NavLink>
                  <NavLink
                    to="/students"
                    onClick={() => setCareerOpen(false)}
                    className="block px-4 py-3 hover:bg-gray-100"
                  >
                    For Students
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/contact">Contact Us</NavLink>
          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-3xl z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <RiCloseLine /> : <RiMenu2Line />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-two text-white py-5 space-y-2 absolute top-16 left-0 w-full shadow-lg">
            <Link to="/" onClick={closeMobileMenu} className="block px-4 py-3">
              Home
            </Link>
            <Link to="/about" onClick={closeMobileMenu} className="block px-4 py-3">
              About
            </Link>
            <Link to="/services" onClick={closeMobileMenu} className="block px-4 py-3">
              Services
            </Link>
            <Link to="/products" onClick={closeMobileMenu} className="block px-4 py-3">
              Products
            </Link>

            {/* Career Dropdown in mobile */}
            <div className="px-4">
              <button
                className="flex justify-between items-center w-full py-3 font-medium"
                onClick={(e) => {
                    e.preventDefault();
                    setCareerOpen(!careerOpen);
                }}
              >
                Career{" "}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    careerOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {careerOpen && (
                <div className="ml-4 flex flex-col space-y-1 border-l border-white/20 pl-4 transition-all">
                  <Link to="/career/openings" onClick={closeMobileMenu} className="py-2">
                    Openings
                  </Link>
                  <Link to="/working" onClick={closeMobileMenu} className="py-2">
                    Working At Muktinath
                  </Link>
                  <Link to="/students" onClick={closeMobileMenu} className="py-2">
                    For Students
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/contact" onClick={closeMobileMenu} className="block px-4 py-3">
              Contact Us
            </Link>

            {/* Social Icons */}
            <div className="flex text-2xl space-x-4 pl-4 pt-4 border-t border-white/10">
              <Link to="https://www.instagram.com/muktinathkrishicompany/" target="_blank">
                <FaInstagram />
              </Link>
              <Link to="https://www.facebook.com/muktinathkrishiCo.Ltd/" target="_blank">
                <LiaFacebook />
              </Link>
              <Link to="https://www.linkedin.com/company/muktinath-krishi-company-ltd" target="_blank">
                <CiLinkedin />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;