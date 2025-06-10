import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Navbar from './navbar.jsx';
import About from './about.jsx';
import Portfolio from './portfolio.jsx';
import Skills from './skills.jsx';
import ContactUs from './contact';

import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    // <div style={{backgroundColor:"black"}}>
    //   <Navbar/>
    //   <About/>
    //   <Portfolio/>
    // </div>
    // <BrowserRouter>
    // {/* <Link to="/about">About</Link>
    // <Link to="/portfolio">Portfolio</Link> */}
    //   <Navbar/>
    //   <About/>
    //   <Portfolio/>
    //   <Routes>
    //     <Route path='/about' element={<About/>}/>
    //     <Route path='/portfolio' element={<Portfolio/>}/>
    //   </Routes>
    // </BrowserRouter>
    <div>
      <Navbar/>
      <section id="about">
        <About/>
      </section>
      <section id="portfolio">
        <Portfolio/>
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="contact">
        <ContactUs/>
      </section>
      <Analytics />
    </div>
  );
}

export default App;
