import React, { Component } from 'react';
import Input from './Input';
import MealList from './MealList';
import TotalCalories from './TotalCalories';
import MoreInfo from './MoreInfo';
import axios from 'axios';
import '../styles/style.css';


export default class Home extends Component {

 constructor(){
   super();
   this.state = {
       nutri: [],
       TotalCalories:"",
       message: ["According to the U.S. Department of Health and Human Services 2010 Dietary Guidelines, the typical woman needs about 2,000 calories per day, and the typical man 2,500 calories per day.",
       "The amount of calories needed depends on age, gender, height, weight, goals, body composition and metabolic rate.","Each pound of body fat stores roughly 3500 calories.", "If you would like to lose one pound per week, you would need to create a calorie shortage of 3500 calories per week or 500 calories per day",
       "Soft drinks are empty-calorie foods.  They supply the body with calories but very few nutrients.", "Nutrient-dense foods include unprocessed food items, fruits, vegetables, etc."],
       randomMessage: ""
   }
   this.editCalories = this.editCalories.bind(this);
   // this.getFood = this.getFood.bind(this);
}

editCalories(selectedCal){
  this.setState({TotalCalories: this.state.TotalCalories+selectedCal})
}

 handleSubmit = (e) => {
   e.preventDefault();
   const food = e.target.elements.name.value;
   axios.get(`/food/${food}`).then((res) => {
     let data = res.data;
     let totalCount = data.nf_calories;
     if(this.state.nutri.length>0){
           let it = this.createItem(food, data.nf_calories, data.nf_serving_size_qty, data.nf_serving_size_unit);
           let addedArray = this.state.nutri.concat(it);
           totalCount= this.state.TotalCalories+totalCount;
           this.setState({nutri: addedArray,
                         TotalCalories: totalCount,
                         randomMessage: this.state.message[Math.floor(Math.random() * this.state.message.length)]})
     } else {
           let it = this.createItem(food, data.nf_calories, data.nf_serving_size_qty, data.nf_serving_size_unit);
           this.setState({nutri: [it],
                         TotalCalories: totalCount,
                         randomMessage: this.state.message[Math.floor(Math.random() * this.state.message.length)]})
     }
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
      <div>
     <Input getName={this.handleSubmit}/>
     {
             this.state.nutri.map( (cal, i) => {

               return  <MealList   foodName={ cal.name }
                                   calories= {cal.calories}
                                   serving= {cal.serving}
                                   unit= {cal.unit}
                                   editCalories = {this.editCalories}/>
             })
               }
   
       <div id="hidden">
          <TotalCalories calor={this.state.TotalCalories} />
          <MoreInfo message={this.state.randomMessage}/>
       </div>
       </div>
   );
 }
}

