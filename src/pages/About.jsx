import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-gray-50">

      {/* Breadcrumb */}
      <div className="px-6 md:px-20 py-6 text-sm text-gray-500">
        <Link to="/" className="hover:text-pink-600">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-800">About Us</span>
      </div>

      {/* About Section */}
      <div className="px-6 md:px-20 pb-16 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <img
          src="/images/about-products.webp"  /* 👉 Put your image inside public/images */
          alt="About Ranragini"
          className="rounded-lg shadow-md"
        />

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About Us</h2>

          <p className="text-gray-600 leading-relaxed">
            At RANRAGINI, we're more than just a business—we're a movement toward a brighter,
            more empowered future. We believe in offering not just high-quality products
            but also a vision of growth, prosperity, and well-being.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4">
            Our mission, centered around "Empowering Lives, Elevating Futures,"
            is simple yet impactful: to bring the finest lifestyle products
            directly to your doorstep while providing an opportunity for
            financial freedom.
          </p>
        </div>
      </div>

      {/* Description Block */}
      <div className="px-6 md:px-20 pb-16 text-gray-600 leading-relaxed">
        <p>
          At RANRAGINI, we are committed to delivering more than just high-quality products—
          we provide a path to success, well-being, and financial growth.
          Here’s what makes us stand out:
        </p>

        <ul className="list-disc ml-6 mt-4 space-y-2">
          <li>
            <strong>Premium Quality Products</strong> – Carefully curated lifestyle products
            that meet the highest standards of authenticity and sustainability.
          </li>
          <li>
            <strong>Transparent & Ethical Business Model</strong> – Seamless earning opportunities
            and complete transparency.
          </li>
          <li>
            <strong>Opportunities</strong> – Compensation plans allowing sustainable income
            while sharing products you love.
          </li>
        </ul>
      </div>

      {/* Our Team Section */}
      <div className="bg-pink-50 py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-2">Our Team</h2>
        <p className="text-gray-500 mb-10">
          Here are the three pillars of the Ranragini enterprise
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Member 1 */}
          <div>
            <img
              src="/images/team1.webp"
              alt="Chetan Bhosale"
              className="mx-auto rounded-lg shadow-md"
            />
            <h4 className="mt-4 font-semibold">Chetan Bhosale</h4>
            <p className="text-sm text-gray-500">CMD</p>
          </div>

          {/* Member 2 */}
          <div>
            <img
              src="/images/team2.webp"
              alt="Aarti Bhosale"
              className="mx-auto rounded-lg shadow-md"
            />
            <h4 className="mt-4 font-semibold">Aarti Bhosale</h4>
            <p className="text-sm text-gray-500">MD</p>
          </div>

          {/* Member 3 */}
          <div>
            <img
              src="/images/team3.webp"
              alt="Vijay Gosavi"
              className="mx-auto rounded-lg shadow-md"
            />
            <h4 className="mt-4 font-semibold">Vijay Gosavi</h4>
            <p className="text-sm text-gray-500">CEO</p>
          </div>

        </div>
      </div>

    </div>
  );
}
