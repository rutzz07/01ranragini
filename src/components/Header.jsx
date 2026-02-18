import { Link } from "react-router-dom";
import {
  FaSearch,
  FaHeart,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false); // Desktop dropdown
  const [mobileMenu, setMobileMenu] = useState(false); // Mobile menu
  const [mobileShop, setMobileShop] = useState(false); // Mobile dropdown

  return (
    <header className="bg-gray-100 shadow">
      <div className="flex items-center justify-between px-6 md:px-16 py-4">
        {/* Logo */}
       <Link to="/" className="flex items-center">
  <img
    src="/images/logo.webp"
    alt="Ranragini Logo"
    className="h-16 md:h-18 w-auto"

  />
</Link>


       
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 relative">
          <Link to="/" className="hover:text-pink-600 font-medium">
            Home
          </Link>

          <Link to="/about" className="hover:text-pink-600">
            About Us
          </Link>

          {/* Shop Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            {/* Shop Main Link */}
            <Link
              to="/shop"
              className="flex items-center gap-1 hover:text-pink-600"
            >
              Shop <FaChevronDown size={12} />
            </Link>

            {/* Dropdown */}
            {open && (
              <div className="absolute top-8 left-0 bg-white shadow-lg w-64 p-4 space-y-3 text-sm z-50 rounded-md">
               <Link to="/product/ranragini-sanitary-napkins" className="block hover:text-pink-600">
  Ranragini Sanitary Napkins
</Link>

<Link to="/product/amrut-juice" className="block hover:text-pink-600">
  Amrut Juice
</Link>

<Link to="/product/panch-tulsi-drops" className="block hover:text-pink-600">
  Panch Tulsi Drops
</Link>

              </div>
            )}
          </div>

          <Link to="/gallery" className="hover:text-pink-600">
            Gallery
          </Link>

          <Link to="/blog" className="hover:text-pink-600">
            Blog
          </Link>

          <Link to="/contact" className="hover:text-pink-600">
            Contact
          </Link>
        </nav>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="https://ranragini.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 text-white px-6 py-2 rounded-md text-sm hover:bg-pink-700 transition inline-block"
          >
            Our Official Website ↗
          </a>

          <FaSearch className="cursor-pointer" />
          <FaHeart className="cursor-pointer" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {mobileMenu ? (
            <FaTimes
              size={22}
              className="cursor-pointer"
              onClick={() => setMobileMenu(false)}
            />
          ) : (
            <FaBars
              size={22}
              className="cursor-pointer"
              onClick={() => setMobileMenu(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          <Link to="/" onClick={() => setMobileMenu(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setMobileMenu(false)}>
            About Us
          </Link>

          {/* Mobile Shop Dropdown */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setMobileShop(!mobileShop)}
            >
              <span>Shop</span>
              <FaChevronDown size={12} />
            </div>

            {mobileShop && (
              <div className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
                <p>Sanitary Napkins</p>
                <p>Detox Foot Patch</p>
                <p>Mobile Chip</p>
                <p>Anion Pads</p>
                <p>Amrut Juice</p>
                <p>Panch Tulsi Drops</p>
                <p>Hair Removal Wax</p>
              </div>
            )}
          </div>

          <Link to="/gallery" onClick={() => setMobileMenu(false)}>
            Gallery
          </Link>
          <Link to="/blog" onClick={() => setMobileMenu(false)}>
            Blog
          </Link>
          <Link to="/contact" onClick={() => setMobileMenu(false)}>
            Contact
          </Link>

          <button className="w-full bg-pink-600 text-white py-2 rounded-md">
            Official Website
          </button>
        </div>
      )}
    </header>
  );
}
