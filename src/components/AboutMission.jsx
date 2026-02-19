import { useNavigate } from "react-router-dom";

export default function AboutMission() {
  const navigate = useNavigate();
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16 space-y-24">

        {/* ===== ABOUT US ===== */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div>
            {/* Put image inside public/images folder */}
            <img
              src="/images/about.webp"
              alt="About Ranragini"
              className="rounded-xl shadow-lg w-full"
            />
          </div>

          {/* Text */}
          <div>
            <p className="uppercase tracking-widest text-gray-500 text-sm">
              ABOUT US
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-4">
              Story for Ranragini
            </h2>

            <p className="text-gray-600 mt-6 leading-relaxed">
              Ranragini is a dedicated wellness brand rooted in the mission of 
              empowering health and eliminating cancer through our Cancer Mukt Abhiyan.
              We offer a thoughtfully curated lineup of products—each designed 
              to enhance well-being, rooted in both science and traditional wisdom.
            </p>

          <button
  onClick={() => navigate("/about")}
  className="mt-8 bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition"
>
  Learn More →
</button>

          </div>
        </div>

        {/* ===== OUR MISSION ===== */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text */}
          <div className="order-2 md:order-1">
            <p className="uppercase tracking-widest text-gray-500 text-sm">
              OUR MISSION
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-4">
              Cancer Mukt Abhiyan
            </h2>

            <p className="text-gray-600 mt-6 leading-relaxed">
              More than just products—Ranragini is a movement. A portion of 
              proceeds from every purchase contributes directly to cancer 
              education, support initiatives, and accessible treatment outreach.
              Together, we’re building a future free from the burden of cancer.
            </p>

                     <button
  onClick={() => navigate("/shop")}
  className="mt-8 bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition"
>
  Learn More →
</button>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2">
            <img
              src="/images/mission.webp"
              alt="Our Mission"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
}