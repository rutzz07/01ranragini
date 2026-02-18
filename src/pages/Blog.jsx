import { FaRegCalendarAlt } from "react-icons/fa";

const blogs = [
  {
    image: "/images/blog1.webp",
    date: "December 4, 2022",
    title: "The Hidden Dangers of Poor Menstrual Hygiene & How Anion Pads Can Help",
    desc: "Menstrual health is one of the most overlooked aspects of women’s wellness. In India, many women still use unsafe alternatives...",
  },
  {
    image: "/images/blog2.webp",
    date: "October 4, 2022",
    title: "Natural Ways to Boost Immunity & Stay Healthy Every Day",
    desc: "With busy lifestyles and increasing pollution, our body’s immune system often struggles to fight infections and diseases...",
  },
  {
    image: "/images/blog3.webp",
    date: "August 4, 2022",
    title: "Experience Comfort & Protection with Anion Chip Sanitary Pads",
    desc: "Discover the perfect blend of comfort, hygiene, and protection designed to keep you feeling fresh and confident all day...",
  },
  {
    image: "/images/blog4.webp",
    date: "June 4, 2022",
    title: "Panch Tulsi Ark & Jeewan Amrut Juice – Daily Vitality for You",
    desc: "Boost your daily vitality with the natural goodness of Panch Tulsi Ark and Jeewan Amrut Juice...",
  },
];

export default function Blog() {
  return (
    <div className="py-16 px-6 md:px-20 bg-white">

      <h1 className="text-4xl font-bold text-center mb-12">
        Blogs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="group cursor-pointer"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={blog.image}
                alt="blog"
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Category */}
            <p className="text-xs text-gray-500 mt-4 uppercase tracking-wider">
              NATURAL , RANRAGINI PRODUCTS
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
          </div>
        ))}
      </div>
    </div>
  );
}
