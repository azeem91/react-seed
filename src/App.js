import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './modules/Menu/Menu';
import Views from './Views';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Seed</h1>
        </header>
        <Menu />
        <Views />
      </div>
    );
  }
}
