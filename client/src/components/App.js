import React, { Component } from 'react';
import Input from './Input';
import MealList from './MealList';
import TotalCalories from './TotalCalories';
import MoreInfo from './MoreInfo';
import axios from 'axios';
import { key, appID } from '../config';

class App extends Component {

  constructor(){
    super();
    this.state = { 
        nutri: {}
    }
    
}

  async componentDidMount(){
      let {data} = await axios('https://api.nutritionix.com/v1_1/search/taco?results=0%3A1&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&');
    
      this.setState({
          nutri: data
      });
  }
  
  render() {
    return (
      <div className="App">
      HELLO WORLD
      <Input />
      </div>
    );
  }
}

export default App;
