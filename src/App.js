import React from 'react';
import LandingPage from './frames/landing-page/landing-page.js';
import AboutPage from './frames/about-page/about-page.js';
import TimelinePage from './frames/timeline-page/timeline-page';
import ContactPage from './frames/contact-page/contact-page';
import Navigation from './components/Navigation';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navigation />
      <LandingPage />
      <AboutPage />
      <TimelinePage />
      <ContactPage />
    </div>
  );
}

export default App;