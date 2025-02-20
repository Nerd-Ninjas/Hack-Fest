
import aboutMain from '../assets/about/about.png'
import { benefits_points as points } from './Constants'

const About = () => {
    return (
        <>
                <div className="about-section-content">
                    <div className="about-section-heading">
                        <h2 className='text-3xl font-bold mb-8'>
                            Transforming Education with Smart Learning Technology
                        </h2>
                        <p className='text-lg font-light p-3'>
                            AI-driven platform with personalized learning, gamification, real-time assessments, expert support, and seamless school integration for career-ready education.
                        </p>
                    </div>
                    <div className="about-section-image ml-20 mt-10">
                        <img src={aboutMain} alt=""  />
                    </div>
                </div>
                <div className="about-section-points">
                {
  points.map((item, index) => (
    <div className="about-section-point" key={index}>
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
