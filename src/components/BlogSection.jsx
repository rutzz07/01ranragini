import React from "react";
import { blogs } from "../data/blogs";
import { Link } from "react-router-dom";



export default function BlogSection() {
  return (
    <section className="bg-[#e9d9de] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Top Heading */}
        <div className="text-center mb-16">
          <p className="text-pink-400 text-3xl italic">beautiful white</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-2">
            Popular Blog Posts
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {blogs.map((blog, index) => (
            <div key={index} className="group">
              {/* Image */}
              <Link to={`/blog/${blog.slug}`}>
                <div className="overflow-hidden bg-[#cfc4b5]">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
              </Link>

              {/* Content */}
              <div className="mt-6">
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  {blog.category}
                </p>

                <h3 className="mt-4 font-semibold text-lg leading-snug text-gray-800 group-hover:text-pink-600 transition">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm mt-3">{blog.desc}</p>

                <Link
                  to={`/blog/${blog.slug}`}
                  className="mt-4 inline-block text-sm font-medium underline hover:text-pink-600 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
