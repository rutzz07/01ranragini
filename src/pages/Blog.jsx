import { FaRegCalendarAlt } from "react-icons/fa";
import { blogs } from "../data/blogs";
import { Link } from "react-router-dom";



export default function Blog() {
  return (
    <div className="py-16 px-6 md:px-20 bg-white">

      <h1 className="text-4xl font-bold text-center mb-12">
        Blogs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            to={`/blog/${blog.slug}`}
            className="group block"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-lg aspect-[4/3]">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>

            {/* Category */}
            <p className="text-xs text-gray-500 mt-4 uppercase tracking-wider">
              {blog.category}
            </p>

            {/* Date */}
            <div className="flex items-center text-sm text-gray-500 mt-2">
              <FaRegCalendarAlt className="mr-2" />
              {blog.date}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mt-3 group-hover:text-pink-600 transition">
              {blog.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
              {blog.desc}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
