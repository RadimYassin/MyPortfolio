import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";



function App() {

  return (
    <div className="App">
         <Navbar/>
         <Routes>
          <Route index path="/" element={<Home/>} />
          <Route  path="/About" element={<About/>} />
          <Route  path="/Projects"  element={<Projects/>} />
         </Routes>
    </div>
  );
}

export default App;
