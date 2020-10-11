import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="row">
        <div className="col-md-4 animate-box">
          <article>
            <h2>Building the Mention Sales Application on Unapp</h2>
            <p className="admin"><span>May 12, 2018</span></p>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
            <p className="author-wrap"><a href="#" className="author-img"></a> <a href="#" className="author">by Dave Miller</a></p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default App;
