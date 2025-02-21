import { Routes, Route } from "react-router-dom";
import { Dashboard, Auth} from "@/layouts";

import Home from "./components/Home";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/*" element={<Auth />} />

      {/* Protected dashboard route */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard/*" element={<Dashboard />} />
        
      </Route>
    </Routes>
  );
}

export default App;
