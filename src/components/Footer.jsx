import React from "react";
import { Link } from "react-router";
import { Facebook, Instagram } from "lucide-react";
import { LuFacebook } from "react-icons/lu";
import { PiPinterestLogo } from "react-icons/pi";
import { FaPinterestP } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-emerald-700 text-white ">
      <div className="w-11/12 mx-auto py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-green-600">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-600">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-green-600">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" aria-label="Instagram" className="hover:text-green-600">
              <Facebook  className="w-6 h-6" />
             
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-green-600">
              <Instagram className="w-6 h-6" />
              
            </a>
            <a href="#" aria-label="Pinterest" className="hover:text-green-600">
              <FaPinterestP
               className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-center items-center md:items-end">
          <p className="text-sm text-gray-200">
            © 2025 <span className="font-semibold">GreenNest</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
