import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Demo from './components/Demo'
import Footer from './components/Footer'
import Video from './components/Video'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Video/>
      <Demo />
      <Footer />
    </div>
  );
}

export default App;
