import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Home from "./Pages/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Blog from "./Pages/Blog";

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog/>}/>
         </Routes>
      </div>
   );
}

export default App;