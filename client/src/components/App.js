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
        nutri: [],
        TotalCalories:""
    }


  handleSubmit = (e) => {
   e.preventDefault();
   const food = e.target.elements.name.value;
   axios.get('https://api.nutritionix.com/v1_1/search/'+food+'?results=0%3A1&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&appId=13b53dd7&a')
   .then((res) => {
     let id = res.data.hits[0]._id;
     axios('https://api.nutritionix.com/v1_1/item?id='+id+'&')
     .then((res) => {
      let data = res.data;
      let totalCount = data.nf_calories;
      if(this.state.nutri.length>0){
        let obj = {name: food,
                   calories: data.nf_calories}
        let addedArray = this.state.nutri.concat(obj);
        totalCount= totalCount+data.nf_calories;
      this.setState({nutri: addedArray,
                    TotalCalories: totalCount})
      }else{
        this.setState({nutri: [{name: food,
                       calories: data.nf_calories}],
                      TotalCalories: totalCount})
      }
                     
     })
     
   })
 }


  render() {
    return (
      <div className="App">
      <Input getName={this.handleSubmit}/>
      {
                     this.state.nutri.map( (cal, i) => {
                        
                       return  <MealList   foodName={ cal.name } 
                                            calories= {cal.calories} />
                      })
                }
        <TotalCalories calor={this.state.TotalCalories} />
      </div>
    );
  }
}

export default App;
