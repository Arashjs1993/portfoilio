import {Routes, Route, useLocation} from 'react-router-dom'
import React from 'react';

import Education from "./Education";
import Projects from "./Projects";
import Languages from './Languages';
import About from "./About";
import Footer  from './Footer';
import Contact from "./Contact"
import Skills from "./Skills"
import Home from "./Home"
import {AnimatePresence} from "framer-motion";

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
           <Routes location={location} key={location.pathname}>
            <Route path="/" element={<div>
            
              <Home />
              
              <About />  

              <Education/>    
          
              <Projects />

              <Skills />
          
              <Languages />

              <Contact />

              <Footer />
            </div>} />

            <Route path="/languages" element={
              <Languages />
            }/>

            <Route path='/Education' element={
              <Education/>
            }/>
            <Route path="/skills" element={
              <Skills />
            }>
            </Route>

            <Route path="/projects" element={
              <Projects />
            }></Route>

            <Route path="/about" element={
              <About />
            }></Route>
          </Routes>
        </AnimatePresence>
       
        
    )
}

export default AnimatedRoutes;