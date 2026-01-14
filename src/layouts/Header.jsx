import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { LiaFacebook } from "react-icons/lia";
import { CiLinkedin } from "react-icons/ci";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 ">
      <div className=" max-w-6xl mx-auto">
        <div className="flex justify-between items-center h-16 lg:h-20 p-4 lg:p-0">
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

            <NavLink to="/career">Career</NavLink>
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
          <div className="lg:hidden flex flex-col space-y-2 bg-two text-white pt-5 pb-5">
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

            <Link
              to="/career"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 hover:text-one font-medium border-gray-50"
            >
              Career
            </Link>

            {/* social media  */}
            <div className="flex text-2xl space-x-4 pl-4">
              {/* facebook icon  */}
              <Link
                to="https://www.instagram.com/muktinathkrishicompany/"
                target="_blank"
              >
                <FaInstagram className=" hover:text-two" />
              </Link>

              {/* instagram icon  */}
              <Link
                to="https://www.facebook.com/muktinathkrishiCo.Ltd/"
                target="_blank"
              >
                <LiaFacebook className=" hover:text-two" />
              </Link>

              {/* linkdin icon  */}
              <Link
                to="https://www.linkedin.com/company/muktinath-krishi-company-ltd"
                target="_blank"
              >
                <CiLinkedin className="hover:text-two" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
