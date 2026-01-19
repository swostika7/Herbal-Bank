import React from "react";
import { FaInstagram } from "react-icons/fa";
import { LiaFacebook } from "react-icons/lia";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";
import CustomerDilogue from "@/components/CustomerDilogue";

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto p-4 text-xs sm:text-sm lg:text-lg">
        {/* Logo image*/}
        <div className="flex justify-center lg:justify-start mb-6">
          <img
            src="assets/muktinath.png"
            alt="Muktinath Herbal bank Logo"
            className="h-10 lg:h-12 w-auto"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 text-center sm:text-left lg:grid-cols-3 ">
          {/*Contact Section */}
          <div className="space-y-1 text-xs lg:text-lg">
            <h2 className="font-bold mb-2">Contact Us</h2>
            <p>Basundhara, Kathmandu</p>
            <p>+977-01-4950097</p>
            <p>info@muktinathherbal.com.np</p>
          </div>

          {/*Quick Links */}
          <div className="space-y-1 text-xs lg:text-lg">
            <h2 className="font-bold mb-2">Quick Links</h2>
            <Link to="/" className="block hover:text-one">
              Home
            </Link>
            <Link to="/about" className="block hover:text-one">
              About
            </Link>
            <Link to="/services" className="block hover:text-one">
              Services
            </Link>
            <Link to="/products" className="block hover:text-one">
              Products
            </Link>
          </div>

          {/* Support & Legal */}
          <div className="space-y-1 text-xs lg:text-lg">
            <h2 className="font-bold mb-2">Support & Legal</h2>

            {/*customer support*/}
            <CustomerDilogue>
              <p className="hover:cursor-pointer hover:underline hover:text-one">
                Customer Support
              </p>
            </CustomerDilogue>

            {/* Privacy and conditions  */}
            <p className="hover:text-one hover:cursor-pointer hover:underline">
              <Link to="/privacy">Privacy Policy</Link>
            </p>

            {/* Terms  */}
            <p className="hover:text-one hover:cursor-pointer hover:underline ">
              <Link to="/terms">Terms and Conditions</Link>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 my-6"></div>

        {/* Footer */}
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
          <p className="text-center lg:text-left text-three">
            @{new Date().getFullYear()} Muktinath Herbal Bank Ltd. All rights
            reserved.
          </p>

          {/*// Social Icons */}
          <div className="flex space-x-5 text-2xl">
            <a
              href="https://www.instagram.com/muktinathkrishicompany/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="hover:text-pink-500 transition" />
            </a>

            <a
              href="https://www.facebook.com/muktinathkrishiCo.Ltd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <LiaFacebook className="hover:text-blue-500 transition" />
            </a>

            <a
              href="https://www.linkedin.com/company/muktinath-krishi-company-ltd"
              target="_blank"
              aria-label="LinkedIn"
            >
              <CiLinkedin className="hover:text-blue-400 transition" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
