import React from 'react';
import './css/App.css'
import { Element } from 'react-scroll';
import Header from './component/Header'
import About from './component/About'
import Skills from './component/Skills';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Navbar from './component/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Element name="home">
        <Header />
      </Element>
      <main>
        <Element name="about">
          <About />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="contacts">
          <Contact />
        </Element>
        <Footer />
      </main>
    </>

  );
}

export default App;
