import Hero from "../components/Hero";
import BestSeller from "../components/BestSeller";
import AboutMission from "../components/AboutMission";
import Reviews from "../components/Reviews";
import SkinCare from "../components/SkinCare";
import BlogSection from "../components/BlogSection";
import SkinCareInfo from "../components/SkinCareInfo";
export default function Home() {
  return (
    <>
      <Hero />
      <BestSeller />
      <SkinCare />
      <AboutMission />
      <Reviews />
      <SkinCareInfo/>
      
      <BlogSection />
    </>
  );
}
