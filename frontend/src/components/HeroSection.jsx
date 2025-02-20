
import heroMain from '../assets/herosection/herosection.png'
// aos
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  
        useEffect(() => {
          AOS.init({
            duration: 700, 
            once: true, 
            offset: 100,
            easing: "ease-in-out",
          });
        }, []);
  return (
    <>
        <div className="hero-section-content flex justify-center gap-5 text-white " data-aos="fade-up">
            <div className="hero-section-con mt-20">
            <p className='font-medium text-zinc-300'>Learning Excellence</p>
            <h2 className='mt-5 text-5xl text-white p-1 mb-10 font-bold' data-aos="fade-up">
            Revolutionizing Education with AI-Driven Personalized Learning!
            </h2>
            <h3 className='font-semibold text-xl text-white ' data-aos="fade-up">
            Empower students, educators, and institutions with AI, Gamification, and VR/AR for a smarter learning experience
            </h3>
            <div className="hero-section-action-btn mt-10" data-aos="fade-up">
                <button className='text-xl font-bold'>Get Started</button>
            </div>
            </div>
          
            <div className="hero-section-img mt-20" data-aos="fade-up-left">
            <img src={heroMain} alt="" className='' />
        </div>
        </div>
      
    </>
  )
}

export default HeroSection




