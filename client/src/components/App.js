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
    //this.getFood = this.getFood.bind(this);
}

  handleSubmit = (e) => {
   e.preventDefault();
   const food = e.target.elements.name.value;
   axios.get('https://api.nutritionix.com/v1_1/search/'+food+'?results=0%3A1&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&appId=13b53dd7&appKey=688b26041f770fad8240a50fb6bc3080')
   .then((res) => {
     let id = res.data.hits[0]._id;
     axios('https://api.nutritionix.com/v1_1/item?id='+id+'&appId=13b53dd7&appKey=688b26041f770fad8240a50fb6bc3080')
     .then((res) => {
      let data = res.data;
      let totalCount = data.nf_calories;
      if(this.state.nutri.length>0){
        let it = this.createItem(food, data.nf_calories, data.nf_serving_size_qty, data.nf_serving_size_unit);
        let addedArray = this.state.nutri.concat(it);
        totalCount= totalCount+data.nf_calories;
      this.setState({nutri: addedArray,
                    TotalCalories: totalCount})
      }else{
        let it = this.createItem(food, data.nf_calories, data.nf_serving_size_qty, data.nf_serving_size_unit);
        this.setState({nutri: [it],
                      TotalCalories: totalCount})
      }
                     
     })
     
   })
 }



createItem(name,calories,serving,unit){
  return{
    name:name,
    calories:calories,
    serving:serving,
    unit:unit
  }
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
