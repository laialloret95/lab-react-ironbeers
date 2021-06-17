import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Link, Route, Switch } from 'react-router-dom'
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/beers" component={Beers} />
        <Route path="/random-beer" component={RandomBeer} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
