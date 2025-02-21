
import About from './About'
import Steps from './Steps'
import HeroSection from './HeroSection'
import { Courses } from './Courses'
import TopBar from "./TopBar"
import { Game } from './Game'



const Home = () => {
  return (
    <>
      <TopBar />
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
        <Courses />

      </div>
      <div className='game' >

        <Game/>

      </div>


      <footer className="flex justify-center items-center ">
        <p className="font-bold text-xl ">Design and Developed by Nerd Ninjas</p>
      </footer>

    </>
  )
}

export default Home
