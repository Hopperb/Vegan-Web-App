import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import RecipeList from './components/RecipeList';
import Login from './components/Login';
import SignUp from './components/SignUp';

import {Button} from 'reactstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Vegan Eats</h1>
        </header>
        <Route exact path="/recipes" component={RecipeList}/>
        <Route path="/register" component={SignUp} />
        <Route path="/login" component={Login} />
        <Link exact to='/register'>
          <Button color="primary" size="md">Sign Up</Button>
        </Link>
        <Link exact to='/login'>
          <Button color="success" size="md">Login</Button>
        </Link>
      </div>
    );
  }
}

export default App;
