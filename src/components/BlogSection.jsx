import React from "react";

const blogs = [
  {
    image: "/images/blog1.webp",
    category: "NATURAL , RANRAGINI PRODUCTS",
    title:
      "The Hidden Dangers of Poor Menstrual Hygiene & How Anion Pads Can Help",
    desc:
      "Introduction Menstrual health is one of the most overlooked aspects ...",
  },
  {
    image: "/images/blog2.webp",
    category: "NATURAL , RANRAGINI PRODUCTS",
    title:
      "Natural Ways to Boost Immunity & Stay Healthy Every Day",
    desc:
      "Introduction With busy lifestyles and increasing pollution, our body’s immune ...",
  },
  {
    image: "/images/blog3.webp",
    category: "NATURAL , RANRAGINI PRODUCTS",
    title:
      "Experience comfort & protection with Anion Chip Sanitary Pads.",
    desc:
      "Discover the perfect blend of comfort, hygiene, and protection ...",
  },
  {
    image: "/images/blog4.webp",
    category: "NATURAL , RANRAGINI PRODUCTS",
    title:
      "Panch Tulsi Ark & Jeewan Amrut Juice – Daily Vitality for You.",
    desc:
      "Boost your daily vitality with the natural goodness of ...",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-[#e9d9de] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* Top Heading */}
        <div className="text-center mb-16">
          <p className="text-pink-400 text-3xl italic">
            beautiful white
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-2">
            Popular Blog Posts
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {blogs.map((blog, index) => (
            <div key={index} className="group">

              {/* Image */}
              <div className="overflow-hidden bg-[#cfc4b5]">
                <img
                  src={blog.image}
                  alt=""
                  className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="mt-6">
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  {blog.category}
                </p>

                <h3 className="mt-4 font-semibold text-lg leading-snug text-gray-800 group-hover:text-pink-600 transition">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm mt-3">
                  {blog.desc}
                </p>

                <button className="mt-4 text-sm font-medium underline hover:text-pink-600 transition">
                  Learn More
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}