import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/** TEXT EXAMPLES **/
import Max from './components/Max/Max.jsx';
import DangerButton from './components/Max/Button/DangerButton.jsx';
import ArbitraryWidget from './components/Max/StateEx/StateEx.jsx';

/** Start Here **/

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          The Main Page - edit <code>src/App.js</code> and save to reload.
        </p>

        <hr/>
        <Max />

        <hr/>
        <DangerButton />

        <hr/>

      </div>
    );
  }
}

export default App;
