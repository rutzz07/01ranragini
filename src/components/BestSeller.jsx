import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { useWishlist } from "../context/WishlistContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function BestSeller() {
  const { toggleWishlist, isInWishlist } = useWishlist();

  return (
    <section className="py-16 bg-gray-100 px-6 md:px-16">

      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-gray-400 italic text-lg">By Ranragini</p>
        <h2 className="text-3xl md:text-4xl font-semibold">
          Our Bestsellers
        </h2>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1.5 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="relative text-center group bg-white p-4 rounded-lg shadow-sm">

              {/* SALE Badge */}
              <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded">
                SALE
              </span>

              {/* Wishlist Heart */}
              <button
                onClick={() => toggleWishlist(product)}
                className={`absolute top-3 right-3 text-lg transition ${
                  isInWishlist(product.id)
                    ? "text-pink-600"
                    : "text-gray-400 hover:text-pink-600"
                }`}
              >
                <FaHeart />
              </button>

              {/* Image Clickable */}
              <Link to={`/product/${product.slug}`}>
                <div className="h-64 flex items-center justify-center p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>

              {/* Name Clickable */}
              <Link to={`/product/${product.slug}`}>
                <h3 className="mt-4 text-sm md:text-base font-medium hover:text-pink-600 transition">
                  {product.name}
                </h3>
              </Link>

              {/* Prices */}
              <div className="mt-2 space-x-2">
                <span className="text-gray-400 line-through text-sm">
                  ₹{product.oldPrice}
                </span>
                <span className="text-red-600 font-semibold">
                  ₹{product.price}
                </span>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}
