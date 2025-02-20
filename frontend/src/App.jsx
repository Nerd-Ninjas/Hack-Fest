import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import Home from "./components/Home"


function App() {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
    </Routes>
  );
}

export default App;
