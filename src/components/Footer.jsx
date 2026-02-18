import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

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

              <p className="text-pink-600 font-semibold text-lg">
                Call +91 7020023262
              </p>

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
                <li className="hover:text-pink-600 cursor-pointer">About Us</li>
                <li className="hover:text-pink-600 cursor-pointer">Gallery</li>
                <li className="hover:text-pink-600 cursor-pointer">Contact Us</li>
                <li className="hover:text-pink-600 cursor-pointer">FAQs</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-sm font-semibold uppercase mb-6">
                Account
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="hover:text-pink-600 cursor-pointer">Shop</li>
                <li className="hover:text-pink-600 cursor-pointer">Privacy Policy</li>
                <li className="hover:text-pink-600 cursor-pointer">Term Of Use</li>
              </ul>
            </div>

            {/* Column 4 - Map */}
          <div className="rounded overflow-hidden shadow-md">
  <a
    href="https://www.google.com/maps/place/300,+Sector+No.+24,+Pradhikaran,+Nigdi,+Pimpri-Chinchwad,+Maharashtra+411044,+India/@18.6584602,73.775355,15z"
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

          <div className="flex items-center gap-4">
            <span>Follow Us On Social:</span>
            <FaInstagram className="cursor-pointer hover:scale-110 transition" />
            <FaFacebookF className="cursor-pointer hover:scale-110 transition" />
            <FaLinkedinIn className="cursor-pointer hover:scale-110 transition" />
            <FaYoutube className="cursor-pointer hover:scale-110 transition" />
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