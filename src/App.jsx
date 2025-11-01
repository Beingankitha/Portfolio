import React from 'react';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Education from './components/education/Education';
import Portfolio from './components/portfolio/Portfolio';
// import Testimonials from './components/testimonials/Testimonials';
import Topbar from './components/topbar/Topbar';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/theme/ThemeToggle';

const App = () => {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <Header />
      <Topbar />
      <Intro />
      <Education />
      <Experience />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </ThemeProvider>
  )
}

export default App
