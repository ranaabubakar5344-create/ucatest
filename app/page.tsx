import HeroSlider from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Courses from "./components/Courses";
import StudentWorkSlider from "./components/StudentWorkSlider";
import WhyChooseUCA from "./components/WhyChooseUCA";
import StudiosSection from "./components/StudiosSection";
import FAQ from "./components/Faq";
export default function HomePage() {
  return (
    <main>
      <HeroSlider />
      <AboutSection />
      <Courses />
      <WhyChooseUCA />
      <StudentWorkSlider />
      
      <StudiosSection />
      <FAQ />
    </main>
  );
}