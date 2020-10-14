import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/Login'
import Home from './components/Home'
import About from './components/About'
import SpotifyCallback from './components/SpotifyCallback'

import { setAPIToken } from './lib/api'

class App extends React.Component {
  componentWillMount() {
    const token = localStorage.getItem('token');
    if (token) {
      setAPIToken(token);
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/home" component={ Home } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/spotify-callback" component={ SpotifyCallback } />
        </Switch>
      </Router>
    )
  }
}

export default App
