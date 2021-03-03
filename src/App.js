import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './frames/landing-page/landing-page.js';
import AboutPage from './frames/about-page/about-page.js';
import TimelinePage from './frames/timeline-page/timeline-page';
import './App.css';


function App() {
  return (
    <div className="App">
      <LandingPage />
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={AboutPage} />
          <Route path='/timeline-page' exact component={TimelinePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;