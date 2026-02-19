import { useState } from "react";

const productsData = [
  {
    id: 1,
    name: "Amrut Juice – A Complete Ayurvedic Health Tonic",
    price: 1400,
    oldPrice: 1999,
    category: "Herbal Products",
    color: "black",
    featured: true,
    stock: true,
    image: "/images/product1.webp",
    sale: true,
  },
  {
    id: 2,
    name: "Ranragini Herbal Hair Removal Wax Powder – Smooth Skin, Naturally",
    price: 250,
    oldPrice: 450,
    category: "Body Wax",
    color: "pink",
    featured: false,
    stock: true,
    image: "/images/product2.webp",
    sale: true,
  },
  {
    id: 3,
    name: "Ranragini Panch Tulsi Drops – Nature’s Immunity Booster",
    price: 350.00,
    oldPrice: 450.00,
    category: "Herbal Products",
    color: "green",
    featured: true,
    stock: false,
    image: "/images/product3.webp",
    sale: true,
  },
  {
    id: 4,
    name: "Ranragini Anion Chip Sanitary Pads – Safe & Comfortable Protection For Women",
    price: 200.00,
    oldPrice: 270.00,
    category: "Herbal Products",
    color: "green",
    featured: true,
    stock: false,
    image: "/images/product4.webp",
    sale: true,
  },
];

export default function Shop() {
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [sort, setSort] = useState("default");

    let filteredProducts = productsData.filter((product) => {
    return (
      product.price >= priceRange[0] &&
      product.price <= priceRange[1] &&
      (!featuredOnly || product.featured) &&
      (!inStockOnly || product.stock) &&
      (!selectedCategory || product.category === selectedCategory) &&
      (!selectedColor || product.color === selectedColor)
    );
  });

  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
  <div className="px-6 md:px-20 py-10">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

      {/* Sidebar */}
      <div className="md:col-span-1 space-y-6">

        {/* Price Filter */}
        <div>
          <h3 className="font-semibold mb-2">Price</h3>
          <input
            type="range"
            min="0"
            max="2000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, e.target.value])}
            className="w-full"
          />
          <p>Up to ₹{priceRange[1]}</p>
        </div>

        {/* Featured */}
        <div>
          <label className="flex gap-2">
            <input
              type="checkbox"
              onChange={(e) => setFeaturedOnly(e.target.checked)}
            />
            Featured products
          </label>
        </div>

        {/* In Stock */}
        <div>
          <label className="flex gap-2">
            <input
              type="checkbox"
              onChange={(e) => setInStockOnly(e.target.checked)}
            />
            In Stock
          </label>
        </div>

        {/* Category */}
        <div>
          <h3 className="font-semibold mb-2">Categories</h3>
          <button onClick={() => setSelectedCategory("Herbal Products")}>
            Herbal Products
          </button>
        </div>

      </div>

      {/* Product Grid */}
      <div className="md:col-span-3">

        {/* Sort */}
        <div className="flex justify-end mb-6">
          <select
            onChange={(e) => setSort(e.target.value)}
            className="border px-3 py-2 rounded"
          >
            <option value="default">Default Sorting</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#cfc6b8] p-6 rounded-t-full relative text-center"
            >
              {product.sale && (
                <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  SALE
                </span>
              )}

              <img
                src={product.image}
                alt={product.name}
                className="h-48 mx-auto object-contain"
              />

              <h3 className="mt-4 font-medium">{product.name}</h3>

              <div className="mt-2">
                <span className="line-through text-gray-500 mr-2">
                  ₹{product.oldPrice}
                </span>
                <span className="text-red-600 font-bold">
                  ₹{product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
}

