import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
 
 
 
import Disponibilidad from "./pages/Disponibilidad";
import Home from "./pages/Home";
import Principal from "./pages/Principal";
import Semana from "./pages/Semana";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />}>
          <Route path="home" element={<Home />} />

          <Route path="semana" element={<Semana />}>
            
            

          </Route>

          <Route path="disponibilidad" element={<Disponibilidad />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
