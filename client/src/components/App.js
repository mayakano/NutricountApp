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
        name: [],
        nutri: [],
        calorie:[],
        TotalCalories:""
    }
    //this.getFood = this.getFood.bind(this);
}

  handleSubmit = (e) => {
   e.preventDefault();
   const food = e.target.elements.name.value;
   axios.get('https://api.nutritionix.com/v1_1/search/'+food+'?results=0%3A1&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&')
   .then((res) => {
     let id = res.data.hits[0]._id;
     axios('https://api.nutritionix.com/v1_1/item?id='+id+'&')
     .then((res) => {
      let data = res.data;
      if(this.state.nutri.length>0){
        let addedArray = this.state.nutri.concat(data.nf_calories);
      this.setState({name: food,
                     nutri: addedArray})
      }else{
        this.setState({name: food,
                       nutri: [data.nf_calories]})
      }
                     
     })
     
   })
 }


  render() {
    return (
      <div className="App">
      <Input getName={this.handleSubmit}/>
      <MealList 
       foodName={ this.state.name }
       calories={ this.state.nutri }/>
      </div>
    );
  }
}

export default App;
