import React, { Component } from 'react';
import Nav from './components/Nav.js'
import BatchContainer from './components/BatchContainer.js'
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Nav />
        <BatchContainer />
      </div>
    );
  }
}

export default App;
