import './App.css'
import Home from './components/pages/home'
import About from './components/pages/about'
import Contact from './components/pages/contact'
import Project from './components/pages/project'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/home' Component={Home}/>
          <Route path='/about' Component={About}/>
          <Route path='/projects' Component={Project}/>
          <Route path='/contact' Component={Contact}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
