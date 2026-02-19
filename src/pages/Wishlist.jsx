import { useWishlist } from "../context/WishlistContext";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const { wishlist,  toggleWishlist  } = useWishlist();

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-3xl font-semibold mb-10">Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-500">No products added to the wishlist</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded-lg shadow-sm"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded"
              />

              <h3 className="mt-3 font-medium">{product.name}</h3>
              <p className="text-gray-500">₹{product.price}</p>

             <button
  onClick={() => toggleWishlist(product)}
  className="mt-3 text-sm text-red-500"
>
  Remove
</button>


              <Link
                to={`/product/${product.slug}`}
                className="block mt-2 text-pink-600 text-sm"
              >
                View Product
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
