import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const reviews = [
  {
    name: "ARTI KAMBLE",
    text: "Ranragini Enterprises चा उत्तम platform आहे...",
  },
  {
    name: "Archana Bochare",
    text: "खूप खूप धन्यवाद आर्ती मॅडम...",
  },
  {
    name: "Anita Patil",
    text: "आर्ती मॅडम खूप छान मार्गदर्शन करतात...",
  },
  {
    name: "Namrata Roarane",
    text: "मी तुमच्यामुळे स्वतःचा व्यवसाय सुरू केला...",
  },
];

export default function Reviews() {
  return (
    <section className="bg-[#f3e3e7] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">
        
        {/* Top Script Text */}
        <p className="text-pink-400 italic text-xl">
          Google Review
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-2 mb-12">
          Happy Customers
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition h-full">
      
      <div className="flex items-center gap-3 mb-3">
        <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
          {review.name.charAt(0)}
        </div>
        <div className="text-left">
          <p className="font-semibold text-sm">{review.name}</p>
          <p className="text-xs text-gray-500">10 months ago</p>
        </div>
      </div>

      {/* Stars */}
      <div className="text-yellow-400 text-sm mb-3">
        ⭐⭐⭐⭐⭐
      </div>

      <p className="text-gray-600 text-sm leading-relaxed">
        {review.text}
      </p>

      <p className="text-pink-500 text-sm mt-4 cursor-pointer">
        Read more
      </p>
    </div>
  );
}