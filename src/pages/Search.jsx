import { useState } from "react";
import { products } from "../data/products";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-semibold mb-10">Search</h1>

      {/* Search Input */}
      <div className="max-w-3xl mx-auto border bg-white flex items-center px-4 py-3 rounded-md shadow-sm">
        <input
          type="text"
          placeholder="Search for products..."
          className="flex-1 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="text-gray-500" />
      </div>

      {/* Results */}
      <div className="max-w-3xl mx-auto mt-10 space-y-4">
        {searchTerm &&
          filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.slug}`}
              className="flex items-center gap-4 bg-white p-4 rounded-md shadow-sm hover:bg-gray-100 transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-gray-500">₹{product.price}</p>
              </div>
            </Link>
          ))}

        {searchTerm && filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-6">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}
