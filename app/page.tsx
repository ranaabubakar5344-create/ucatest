import HeroSlider from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Courses from "./components/Courses";
export default function HomePage() {
  return (
    <main>
      <HeroSlider />
      <AboutSection />
      <Courses />
    </main>
  );
}