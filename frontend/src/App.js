import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home'
import About from './components/About'
import SpotifyCallback from './components/SpotifyCallback'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/spotify-callback" component={ SpotifyCallback } />
        </Switch>
      </Router>
    )
  }
}

export default App
