import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Header } from './Header';
import { Hero } from './Hero';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
   <Header />
   <Hero />
   <About />
   <Projects />
   <Resume />
   < Contact />
   <Footer />
  </React.StrictMode>
);


