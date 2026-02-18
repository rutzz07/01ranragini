import { FaHeart } from "react-icons/fa";

export default function BestSeller() {
  const products = [
    {
      id: 1,
      name: "Amrut Juice – A Complete Ayurvedic Health Tonic",
      image: "/images/product1.webp",
      oldPrice: "₹1,999.00",
      newPrice: "₹1,400.00",
      sale: true,
    },
    {
      id: 2,
      name: "Ranragini Herbal Hair Removal Wax Powder – Smooth Skin, Naturally",
      image: "/images/product2.webp",
      oldPrice: "₹450.00",
      newPrice: "₹250.00",
      sale: true,
    },
    {
      id: 3,
      name: "Ranragini Panch Tulsi Drops – Nature’s Immunity Booster",
      image: "/images/product3.webp",
      oldPrice: "₹450.00",
      newPrice: "₹350.00",
      sale: true,
    },
    {
      id: 4,
      name: "Ranragini Anion Chip Sanitary Pads – Safe & Comfortable",
      image: "/images/product4.webp",
      oldPrice: "₹270.00",
      newPrice: "₹200.00",
      sale: true,
    },
  ];

  return (
    <section className="py-20 bg-gray-100 px-6 md:px-16">
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-gray-400 italic text-lg">By Ranragini</p>
        <h2 className="text-3xl md:text-4xl font-semibold">Our Bestsellers</h2>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {products.map((product) => (
          <div key={product.id} className="relative text-center group">
            {/* SALE Badge */}
            {product.sale && (
              <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded">
                SALE
              </span>
            )}

            {/* Heart Icon */}
            <FaHeart className="absolute top-3 right-3 text-gray-400 hover:text-pink-600 cursor-pointer transition" />

            {/* Circle Background */}
            <div
              className="bg-[##C8BFB0] rounded-t-full rounded-b-lg 
                flex items-end justify-center 
                h-80 p-6 overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
              />
            </div>

            {/* Product Name */}
            <h3 className="mt-5 text-sm md:text-base font-medium px-3">
              {product.name}
            </h3>

            {/* Prices */}
            <div className="mt-3 space-x-2">
              <span className="text-gray-400 line-through text-sm">
                {product.oldPrice}
              </span>
              <span className="text-red-600 font-semibold">
                {product.newPrice}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
