import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar/Navbar'
import Home from './components/pages/Home/Home'
import About from './components/pages/About/About'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
