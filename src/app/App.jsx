import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import logo from 'images/gearedapp_logo';

import Home from './pages/Home';
import Layout from './components/Layout';

class App extends Component {
  render() {
    return (
      <Layout>
    		<Router>
    			<Route path="/" component={ Home } />
    		</Router>
    	</Layout>
    );
  }
}

export default App;
