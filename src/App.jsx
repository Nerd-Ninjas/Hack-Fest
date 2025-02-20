import Home from "./components/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router"



function App() {


  return (
    <>
      <Router>
        <div className="App overflow-hidden" >
    
         
            <Routes>

              <Route path='/' element={<Home />}></Route>

            </Routes>

   


        </div>
      </Router>
    </>
  )
}

export default App
