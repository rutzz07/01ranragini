import { Link } from "react-router-dom";
import {
  FaSearch,
  FaHeart,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";
import { useWishlist } from "../context/WishlistContext";

const products = [
  { name: "Ranragini Sanitary Napkins", slug: "ranragini-sanitary-napkins" },
  { name: "Ranragini Detox Foot Patch", slug: "detox-foot-patch" },
  {
    name: "Ranragini Anti-Radiation Mobile Chip",
    slug: "anti-radiation-mobile-chip",
  },
  {
    name: "Ranragini Anion Chip Sanitary Pads",
    slug: "anion-chip-sanitary-pads",
  },
  {
    name: "Amrut Juice – A Complete Ayurvedic Health Tonic",
    slug: "amrut-juice",
  },
  { name: "Ranragini Panch Tulsi Drops", slug: "panch-tulsi-drops" },
  {
    name: "Ranragini Herbal Hair Removal Wax Powder",
    slug: "herbal-hair-removal-wax",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileShop, setMobileShop] = useState(false);
  const { wishlist } = useWishlist();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        {/* Logo */}
        <Link to="/">
          <img src="/images/logo.webp" alt="Logo" className="h-14 md:h-16" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium relative">
          <Link to="/" className="hover:text-pink-600">
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
            <Link
              to="/shop"
              className="flex items-center gap-1 cursor-pointer hover:text-pink-600"
            >
              Shop
              <FaChevronDown size={12} />
            </Link>

            <div
              className={`absolute top-10 left-0 bg-white shadow-xl w-72 p-5 rounded-md text-sm transition-all duration-300 ${
                open
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              {products.map((item, index) => (
                <Link
                  key={index}
                  to={`/product/${item.slug}`}
                  className="block py-2 hover:text-pink-600 transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>
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

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-6">

          <a
    href="https://ranragini.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-pink-600 text-white px-5 py-2 rounded-full text-sm hover:bg-pink-700 transition"
  >
    Our Official Website ↗
  </a>
          <Link to="/search">
            <FaSearch className="cursor-pointer hover:text-pink-600" />
          </Link>

          <Link to="/wishlist" className="relative">
            <FaHeart className="cursor-pointer hover:text-pink-600" />

            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {wishlist.length}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
       {/* Mobile Right Section */}
<div className="md:hidden flex items-center gap-4">

  <Link to="/search">
    <FaSearch className="text-lg hover:text-pink-600" />
  </Link>

  <Link to="/wishlist" className="relative">
    <FaHeart className="text-lg hover:text-pink-600" />

    {wishlist.length > 0 && (
      <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
        {wishlist.length}
      </span>
    )}
  </Link>

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
      <div
        className={`md:hidden bg-white shadow-md px-6 transition-all duration-300 ${
          mobileMenu ? "max-h-screen py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <Link to="/" className="block py-2">
          Home
        </Link>
        <Link to="/about" className="block py-2">
          About Us
        </Link>

        {/* Mobile Shop */}
        <div>
          <div
            className="flex justify-between items-center py-2 cursor-pointer"
            onClick={() => setMobileShop(!mobileShop)}
          >
            <span>Shop</span>
            <FaChevronDown
              size={12}
              className={`transition-transform ${mobileShop ? "rotate-180" : ""}`}
            />
          </div>

          {mobileShop && (
            <div className="pl-4 space-y-2 text-sm text-gray-600">
              {products.map((item, index) => (
                <Link
                  key={index}
                  to={`/product/${item.slug}`}
                  className="block hover:text-pink-600 transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link to="/gallery" className="block py-2">
          Gallery
        </Link>
        <Link to="/blog" className="block py-2">
          Blog
        </Link>
        <Link to="/contact" className="block py-2">
          Contact
        </Link>
        <a
  href="https://ranragini.in/"
  target="_blank"
  rel="noopener noreferrer"
  className="block mt-4 bg-pink-600 text-white text-center py-2 rounded-full hover:bg-pink-700 transition"
>
  Our Official Website ↗
</a>

        
      </div>
    </header>
  );
}
