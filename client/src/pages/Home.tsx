import { useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import ParticlesBackground from "@/components/Particles";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/pages/sections/HeroSection";
import AboutMeSection from "@/pages/sections/AboutMeSection";
import InterestsSection from "@/pages/sections/InterestsSection";
import EducationSection from "@/pages/sections/EducationSection";
import FutureSection from "@/pages/sections/FutureSection";

const Home = () => {
  const { scrollYProgress } = useScroll();
  
  // Function to handle section animations
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
        
        if (isVisible) {
          section.classList.add("visible");
        }
      });
    };
    
    // Run once on initial render
    setTimeout(handleScroll, 100);
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ParticlesBackground />
      
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />
      
      <Header />
      
      <main>
        <HeroSection />
        <AboutMeSection />
        <InterestsSection />
        <EducationSection />
        <FutureSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
