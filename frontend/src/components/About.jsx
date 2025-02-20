
import aboutMain from '../assets/about/about.png'
import { benefits_points as points } from './Constants'

// aos
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const About = () => {

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
                <div className="about-section-content">
                    <div className="about-section-heading">
                        <h2 className='text-3xl font-bold mb-8' data-aos="fade-up">
                            Transforming Education with Smart Learning Technology
                        </h2>
                        <p className='text-lg font-light p-3'data-aos="fade-up">
                            AI-driven platform with personalized learning, gamification, real-time assessments, expert support, and seamless school integration for career-ready education.
                        </p>
                    </div>
                    <div className="about-section-image ml-20 mt-10" data-aos="fade-up-right">
                        <img src={aboutMain} alt=""  />
                    </div>
                </div>
                <div className="about-section-points">
                {
  points.slice(0,1).map((item, index) => (
    <div className="about-section-point" key={index} data-aos="fade-up-right">
      <img src={item.icon} alt=""  className='h-8 w-10'/>
      <p className='text-xl font-semibold mt-2'>{item.name}</p>
      <p className='text-base mt-2'>{item.con}</p>
    </div>
  ))
}
{
  points.slice(1,2).map((item, index) => (
    <div className="about-section-point" key={index} data-aos="fade-up-left">
      <img src={item.icon} alt=""  className='h-8 w-10'/>
      <p className='text-xl font-semibold mt-2'>{item.name}</p>
      <p className='text-base mt-2'>{item.con}</p>
    </div>
  ))
}

{
  points.slice(2,3).map((item, index) => (
    <div className="about-section-point" key={index} data-aos="fade-up-right">
      <img src={item.icon} alt=""  className='h-8 w-10'/>
      <p className='text-xl font-semibold mt-2'>{item.name}</p>
      <p className='text-base mt-2'>{item.con}</p>
    </div>
  ))
}
{
  points.slice(3,4).map((item, index) => (
    <div className="about-section-point" key={index} data-aos="fade-up-left">
      <img src={item.icon} alt=""  className='h-8 w-10'/>
      <p className='text-xl font-semibold mt-2'>{item.name}</p>
      <p className='text-base mt-2'>{item.con}</p>
    </div>
  ))
}


            </div>
        </>
    )
}

export default About
