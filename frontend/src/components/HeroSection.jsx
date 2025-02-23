import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroMain from "../assets/herosection/herosection.png";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 120,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="hero-section-content flex flex-col md:flex-row items-center justify-between gap-12 bg-black px-8 md:px-16 py-20 text-white">
      
      {/* Left Content */}
      <div className="max-w-2xl text-center md:text-left" data-aos="fade-up">
        <p className="text-lg font-medium text-gray-400 uppercase tracking-widest">
          Unlock the Future
        </p>
        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text leading-tight">
          AI-Powered Personalized Learning
        </h2>
        <h3 className="mt-5 text-lg md:text-xl font-medium text-gray-300">
          Empowering learners with adaptive AI, gamification, and immersive VR/AR.
        </h3>
        <div className="mt-8">
          <button className="px-6 py-3 text-lg font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-black hover:scale-105 transition-all rounded-lg shadow-lg">
            Explore Now
          </button>
        </div>
      </div>

      {/* Right Image with Glassmorphism Effect */}
      <div className="relative max-w-lg" data-aos="fade-up-left">
        <div className="absolute inset-0 bg-white opacity-10 blur-xl"></div>
        <img
          src={heroMain}
          alt="AI Learning"
          className="w-full h-auto object-cover rounded-xl shadow-xl border border-gray-800 transition-transform transform hover:scale-105"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default HeroSection;
