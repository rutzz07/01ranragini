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
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      navigation
      loop
      speed={1000}
      className="min-h-[500px] md:h-[650px]"
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
    <div
      className="
        relative 
        min-h-[500px] md:h-[650px] 
        bg-cover 
        bg-left md:bg-center 
        flex 
        items-center
      "
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div
        className="
          relative z-10
          max-w-xl md:max-w-3xl
          px-6 md:px-0
          ml-6 md:ml-auto
          md:mr-24
          py-16 md:py-0
        "
      >
        <h1
          className="
            whitespace-pre-line
            text-3xl md:text-6xl
            font-bold
            leading-tight
            text-white
          "
        >
          {title}
        </h1>

        <div
          className="
            bg-yellow-500
            inline-block
            px-4 md:px-6
            py-2 md:py-3
            rounded-full
            mt-4 md:mt-6
            text-sm md:text-lg
            font-medium
          "
        >
          {subtitle}
        </div>

        <div className="mt-4 md:mt-6">
          <button
            className="
              bg-black text-white
              px-6 md:px-8
              py-2 md:py-3
              rounded-full
              hover:bg-gray-800
              transition
            "
          >
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}