import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HookCounter />
        {/* <ClassCounter /> */}
      </div>
    );
  }
}

export default App;
