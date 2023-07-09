import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/home.js';

const App = () => {
  return (
    <Router>
      <div>
        <Home />
      </div>
    </Router>  
    );
  };

export default App;