import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "/images/hero1.png",
    title: "EMPOWERING HEALTH,\nINSPIRING CHANGE",
    subtitle: "Because every life deserves health and happiness",
  },
  {
    image: "/images/hero2.png",
    title: "NATURAL WAYS\nTO BOOST IMMUNITY",
    subtitle:
      "Panch Tulsi Ark & Jeewan Amrut Juice – Daily Vitality for You",
  },
  {
    image: "/images/hero3.png",
    title: "REDEFINING\nWOMEN'S HYGIENE",
    subtitle:
      "Experience comfort & protection\nwith Anion Chip Sanitary Pads",
  },
];

export default function Hero() {
  return (
    <Swiper
      modules={[Autoplay, Navigation, EffectFade]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      navigation
      loop
      speed={1000}
      className="w-full h-[420px] sm:h-[520px] md:h-[650px]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <HeroSlide {...slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function HeroSlide({ image, title, subtitle }) {
  return (
    <div className="relative w-full h-[420px] sm:h-[520px] md:h-[650px] overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-left md:bg-center zoom-animation"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center md:justify-end justify-center">
        <div className="w-full px-6 md:px-20">

          <div className="max-w-2xl md:text-right text-center ml-auto">

            <h1 className="whitespace-pre-line text-2xl sm:text-4xl md:text-6xl font-bold leading-tight text-white">
              {title}
            </h1>

            <div className="bg-yellow-500 inline-block px-4 md:px-6 py-2 md:py-3 rounded-full mt-4 md:mt-6 text-sm sm:text-base md:text-lg font-medium text-black">
              {subtitle}
            </div>

            {/* <div className="mt-6 md:mt-8">
              <button className="bg-black text-white px-6 md:px-10 py-2 md:py-4 rounded-full hover:bg-gray-800 transition text-sm md:text-base">
                SHOP NOW
              </button>
            </div> */}

          </div>

        </div>
      </div>

    </div>
  );
}
