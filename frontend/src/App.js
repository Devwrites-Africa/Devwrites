import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import './App.css';
import { Route, Routes } from 'react-router-dom'

function App() {
  console.log(window.innerWidth)
  return (
    <div className="App">
      <Navbar />
      {/* <HomePage />
      <Footer /> */}
    </div>
  );
}

export default App;
