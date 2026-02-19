import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-[#e9d9de] pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

            {/* Column 1 */}
            <div>
              <h3 className="text-sm font-semibold uppercase mb-6">
                Feel Free To Connect
              </h3>

              <p className="text-gray-600 text-sm mb-2">Need support</p>

              {/* Clickable Phone */}
              <a
                href="tel:+917020023262"
                className="text-pink-600 font-semibold text-lg hover:underline"
              >
                Call +91 7020023262
              </a>

              <p className="text-gray-600 text-sm mt-2">
                Mon – Fri: 09 am – 05 pm
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-sm font-semibold uppercase mb-6">
                Contact Us
              </h3>

              <ul className="space-y-3 text-gray-700 text-sm">
                <li>
                  <Link to="/about" className="hover:text-pink-600">
                    About Us
                  </Link>
                </li>

                <li>
                  <Link to="/gallery" className="hover:text-pink-600">
                    Gallery
                  </Link>
                </li>

                <li>
                  <Link to="/contact" className="hover:text-pink-600">
                    Contact Us
                  </Link>
                </li>

                <li>
                  <Link to="/faqs" className="hover:text-pink-600">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-sm font-semibold uppercase mb-6">
                Account
              </h3>

              <ul className="space-y-3 text-gray-700 text-sm">
                <li>
                  <Link to="/shop" className="hover:text-pink-600">
                    Shop
                  </Link>
                </li>

                <li>
                  <Link to="/privacy-policy" className="hover:text-pink-600">
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link to="/terms-of-use" className="hover:text-pink-600">
                    Terms Of Use
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 - Map */}
            <div className="rounded overflow-hidden shadow-md">
              <a
                href="https://www.google.com/maps/place/300,+Sector+No.+24,+Pradhikaran,+Nigdi,+Pimpri-Chinchwad,+Maharashtra+411044,+India"
                target="_blank"
                rel="noopener noreferrer"
              >
                <iframe
                  title="map"
                  src="https://maps.google.com/maps?q=300%20Sector%2024%20Nigdi%20Pimpri%20Chinchwad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-40 pointer-events-none"
                  loading="lazy"
                ></iframe>
              </a>
            </div>

          </div>
        </div>
      </footer>

      {/* Bottom Pink Bar */}
      <div className="bg-pink-600 text-white py-5">
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

          <p>© 2024 Ranragini All rights reserved.</p>

          <p>Design and Developed by NRBS</p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span>Follow Us On Social:</span>

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:scale-110 transition cursor-pointer" />
            </a>

            <a href="https://www.facebook.com/profile.php?id=61574347331721" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:scale-110 transition cursor-pointer" />
            </a>

            <a href="https://www.linkedin.com/in/aarti-bhosale-8a9a77353/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="hover:scale-110 transition cursor-pointer" />
            </a>

            <a href="https://www.youtube.com/@Aartibhosale-y9b" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="hover:scale-110 transition cursor-pointer" />
            </a>
          </div>

        </div>
      </div>

      {/* Scroll To Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-pink-600 text-white w-10 h-10 flex items-center justify-center shadow-lg hover:bg-pink-700 transition"
      >
        ↑
      </button>
    </>
  );
}
