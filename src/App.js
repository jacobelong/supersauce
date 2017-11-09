import React, { Component } from 'react';
import Header from './components/Header';
import Layout from './components/Layout';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="App">
        <Header />
        <Layout />
      </main>
    );
  }
}

export default App;
