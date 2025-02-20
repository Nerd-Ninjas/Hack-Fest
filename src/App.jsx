import TopBar from "./components/TopBar"
import Home from "./components/Home"
import { BrowserRouter as Router } from "react-router"



function App() {


  return (
    <>
      <Router>
        <div className="App">
          <div className="landing-page">
            <TopBar />
            <div className="landing-content">

              <Home />


            </div>

            <footer className="flex justify-center items-center ">
              <p className="font-bold text-xl ">Design and Developed by Nerd Ninjas</p>
            </footer>

          </div>



        </div>
      </Router>
    </>
  )
}

export default App
