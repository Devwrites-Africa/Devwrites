import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Home from "./Pages/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
   return (
      <div className="App">
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
         </Routes>
         <Footer />
      </div>
   );
}

export default App;