import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-pink-600">404</h1>
      <p className="text-gray-600 mt-4">Page Not Found</p>

      <Link
        to="/"
        className="mt-6 bg-pink-600 text-white px-6 py-3 rounded hover:bg-pink-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
