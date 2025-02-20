
import About from './About'
import Steps from './Steps'
import HeroSection from './HeroSection'
import { Courses } from './Courses'


const Home = () => {
  return (
    <>
      <div className="hero-section">
      
      <HeroSection />
      
      </div>

      <div className="about-section">
        <About />
      </div>
      <div className="steps-involving">
        <Steps />
      </div>
      <div className='courses' >
        <Courses/>

      </div>
    </>
  )
}

export default Home
