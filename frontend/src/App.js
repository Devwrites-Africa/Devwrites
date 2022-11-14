import {Navbar,Footer} from './Components';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import {HomePage,Blog,About,Programs,Error,SharedLayout} from './Pages'

function App() {
  return (
    <div className="App">
      {/*<Navbar />*/}
      <Navbar/>
      <Routes>
        <Route path='/' element={<SharedLayout/>} >
          <Route index element={<HomePage/>}/>
        <Route path='about' element={<About/>} />
        <Route path='blog' element={<Blog/>} />
        <Route path='programs' element={<Programs/>} />
        <Route path='*' element={<Error/>} />
        </Route>
      </Routes>
<Footer/>

    </div>
  );
}

export default App;
