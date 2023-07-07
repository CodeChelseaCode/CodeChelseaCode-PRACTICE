import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Resume from './Resume';
import Contact from './Contact';
import Project from './Project';

// Import your other components (Home, Resume, Project, Contact)

const App = () => (
  <Router>
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/project" component={Project} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  </Router>
);

export default App;
