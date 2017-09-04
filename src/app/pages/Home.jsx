import React, { Component } from 'react';
import logo from 'images/gearedapp_logo';

class Home extends Component {

  add(a,b) {
    return a + b;
  }

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <h1 className="-gearedapp">[ GearedApp ]</h1>
          <img src={ logo } className="App-logo" alt="logo" />
        </div>

        <h2>| Welcome to Webpack2.0 + React | Boilerplate v1.0 |</h2>

        <p className="App-intro">
          To get started, edit files in <code>src/</code> and save to reload.
        </p>

      </div>
    );
  }
}

export default Home;
