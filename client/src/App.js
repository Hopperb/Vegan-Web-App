import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import RecipeList from './Recipes/RecipeList'

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
        <Route exact path="/" component={RecipeList} />
      </div>
    );
  }
}

export default App;
