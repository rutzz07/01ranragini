import { FaLeaf, FaVial, FaHandsHelping } from "react-icons/fa";
import { GiRabbit, GiMicroscope } from "react-icons/gi";
import { MdOutlineNoDrinks } from "react-icons/md";

export default function SkinCare() {
  return (
    <section className="bg-[#f5e8ea] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            High Quality <br />
            Skin Care Products
          </h2>

          <p className="mt-4 text-gray-600 text-lg tracking-wide">
            FOR EVERYONE, DEVELOPED IN NORWAY
          </p>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-10 text-center">
            
            <Feature icon={<FaLeaf size={30} />} text="FOR ALL SKIN TYPES" />
            <Feature icon={<GiRabbit size={30} />} text="NOT TESTED ON ANIMALS" />
            <Feature icon={<MdOutlineNoDrinks size={30} />} text="ALCOHOL FREE" />
            <Feature icon={<GiMicroscope size={30} />} text="LABORATORY TESTED" />
            <Feature icon={<FaHandsHelping size={30} />} text="FREE FROM ALLERGENS" />
            <Feature icon={<FaVial size={30} />} text="DEVELOPED BY EXPERTS" />

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          {/* Add image inside public/images folder */}
          <img
            src="/images/bottle.webp"
            alt="Product"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, text }) {
  return (
    <div className="flex flex-col items-center gap-3 text-pink-600">
      {icon}
      <p className="text-sm md:text-base text-gray-700 font-medium">
        {text}
      </p>
    </div>
  );
}