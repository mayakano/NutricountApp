import React, { Component } from 'react';
import Input from './Input';
import MealList from './MealList';
import TotalCalories from './TotalCalories';
import MoreInfo from './MoreInfo';
import axios from 'axios';

class App extends Component {

  constructor(){
    super();
    this.state = { 
        nutri: {}
    }
    //this.getFood = this.getFood.bind(this);
}

async componentDidMount() {
  let item = await axios('https://api.nutritionix.com/v1_1/search/apple?results=0%3A1&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&');
  let id = item.data.hits[0]._id;
  let {data} = await axios('https://api.nutritionix.com/v1_1/item?id='+id+'&');
  this.setState({nutri: data});
}

  //  async getFood() {
  //   let data = await axios('/food').catch(err => console.log(err.message));
  //   this.setState({nutri: data});
  //   console.log(data);
  // }

  // componentDidMount() {
  //   this.getFood();
  // }
  
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
