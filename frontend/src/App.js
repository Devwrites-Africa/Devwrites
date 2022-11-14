import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Components/About";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
   return (
      <div className="App">
         <Navbar />
         <Routes>
            <Route path="/" element={<Footer />} />
            <Route path="/about" element={<About />} />
         </Routes>
      </div>
   );
}

export default App;
