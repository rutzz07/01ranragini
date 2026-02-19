import { useParams } from "react-router-dom";
import products from "../data/products";
import { useWishlist } from "../context/WishlistContext";
import { FaHeart } from "react-icons/fa";

export default function ProductDetails() {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { slug } = useParams();
  const { addToWishlist } = useWishlist();   // ✅ add this

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return <div className="p-20 text-center">Product Not Found</div>;
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-16">

        {/* Image Section */}
        <div className="bg-[#cfc6b8] p-8 rounded relative">
          <span className="absolute top-4 left-4 bg-red-600 text-white text-xs px-3 py-1 rounded">
            SALE
          </span>

          <img
            src={product.image}
            alt={product.name}
            className="mx-auto"
          />
        </div>

        {/* Details Section */}
        <div>

          {/* Title + Heart */}
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold">
              {product.name}
            </h1>

          <button
  onClick={() => toggleWishlist(product)}
  className={`text-xl transition ${
    isInWishlist(product.id)
      ? "text-pink-600"
      : "text-gray-400 hover:text-pink-600"
  }`}
>
  <FaHeart />
</button>

          </div>

          <div className="mt-4 text-2xl">
            <span className="line-through text-gray-400 mr-3">
              ₹{product.oldPrice}
            </span>
            <span className="text-red-600 font-bold">
              ₹{product.price}
            </span>
          </div>

          <p className="mt-6 text-gray-600 leading-relaxed">
            {product.description}
          </p>

          <button className="mt-8 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded">
            WhatsApp Enquiry
          </button>

          <div className="mt-6 text-sm text-gray-500">
            Category: {product.category}
          </div>
        </div>

      </div>
    </div>
  );
}
