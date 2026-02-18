import { FaLeaf, FaArrowDown, FaBullseye, FaRecycle } from "react-icons/fa";

export default function SkinCareInfo() {
  const features = [
    {
      icon: <FaLeaf size={40} />,
      title: "Naturally",
      text: "At Ranragini, every product is inspired by nature. We harness the power of plants and minerals to create pure, safe, and natural solutions that care for your body and well-being.",
    },
    {
      icon: <FaArrowDown size={40} />,
      title: "Effectively",
      text: "Our formulations combine natural ingredients with carefully selected active components in their most effective forms—delivering results you can truly see and feel.",
    },
    {
      icon: <FaBullseye size={40} />,
      title: "Regional",
      text: "We believe in supporting our roots. That's why we prioritize sourcing raw materials from local farmers and regional suppliers, ensuring freshness, authenticity, and community growth.",
    },
    {
      icon: <FaRecycle size={40} />,
      title: "Sustainable",
      text: "Sustainability guides everything we do. From eco-friendly packaging to recyclable systems, we are committed to protecting the environment while bringing you innovative wellness solutions.",
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">
        {/* Script Text */}
        <p
          className="text-pink-400 text-3xl"
          style={{ fontFamily: "Great Vibes" }}
        >
          beautiful white
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-2 mb-16">
          Our Ranragini skin care is
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-pink-500 mb-6 flex justify-center">
                {feature.icon}
              </div>

              <h3 className="font-semibold text-lg mb-4">{feature.title}</h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
