import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home.js';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contacts from './Pages/Contacts'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/projects">
          <Projects/>
        </Route>
        <Route path="/contacts">
          <Contacts/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
