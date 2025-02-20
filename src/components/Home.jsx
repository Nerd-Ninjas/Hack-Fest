
import About from './About'
import Steps from './Steps'
import HeroSection from './HeroSection'


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
    </>
  )
}

export default Home
