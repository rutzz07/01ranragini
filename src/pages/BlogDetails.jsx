import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs"; // move blog data to separate file

export default function BlogDetails() {
  const { slug } = useParams();

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return <div className="p-20 text-center">Blog Not Found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
      
      {/* Header Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full rounded-lg mb-10"
      />

      {/* Category */}
      <p className="text-sm text-gray-500 uppercase">
        {blog.category}
      </p>

      {/* Title */}
      <h1 className="text-4xl font-bold mt-4 mb-6">
        {blog.title}
      </h1>

      {/* Content */}
      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
        {blog.content}
      </div>

    </div>
  );
}
