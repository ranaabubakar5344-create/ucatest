import HeroSlider from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Courses from "./components/Courses";
import StudentWorkSlider from "./components/StudentWorkSlider";
import WhyChooseUCA from "./components/WhyChooseUCA";
import StudiosSection from "./components/StudiosSection";
export default function HomePage() {
  return (
    <main>
      <HeroSlider />
      <AboutSection />
      <Courses />
      <WhyChooseUCA />
      <StudentWorkSlider />
      
      <StudiosSection />
    </main>
  );
}