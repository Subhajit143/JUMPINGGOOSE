import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">About Us</h2>
            <p className="text-sm leading-6">
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit tempora rem eum quibusdam animi, maiores, commodi odio mollitia, voluptatum deserunt quo consectetur ex explicabo cumque quam reiciendis soluta inventore aspernatur aliquam error praesentium pariatur ipsam?
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-yellow-300">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">About</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">Services</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
            <p className="text-sm leading-6 mb-4">
              Stay connected with us through our social media channels.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-300 text-2xl"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-300 text-2xl"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-300 text-2xl"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-300 text-2xl"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

       
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Subh Infotech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
