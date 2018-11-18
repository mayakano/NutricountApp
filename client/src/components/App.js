import React, { Component } from 'react';
import Input from './Input';
import MealList from './MealList';
import TotalCalories from './TotalCalories';
import MoreInfo from './MoreInfo';
import '../styles/global.css';


class App extends Component {
  render() {
    return (
    <div>
        <div id= "title" >
            <h1>NutriCal</h1>
        </div>
        <div id= "directions">
          <h2>Input Meals In the Search Bar to Count Your Calories</h2>
        </div>
  </div>
    );
  }
}


class NameForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    alert('The value is: ' + this.input.value);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={(input) => this.input = input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}






export default App;
