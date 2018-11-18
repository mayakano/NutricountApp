import React, { Component } from 'react';
import Input from './Input';
import MealList from './MealList';
import TotalCalories from './TotalCalories';
import MoreInfo from './MoreInfo';
import axios from 'axios';
import '../styles/style.css';


class App extends Component {

 constructor(){
   super();
   this.state = {
       nutri: [],
       TotalCalories:""
   }
   // this.getFood = this.getFood.bind(this);
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
           totalCount= totalCount+data.nf_calories;
           this.setState({nutri: addedArray,
                         TotalCalories: totalCount})
     } else {
           let it = this.createItem(food, data.nf_calories, data.nf_serving_size_qty, data.nf_serving_size_unit);
           this.setState({nutri: [it],
                         TotalCalories: totalCount})
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
     <div className="App">
     <Input getName={this.handleSubmit}/>
     {
             this.state.nutri.map( (cal, i) => {

               return  <MealList   foodName={ cal.name }
                                   calories= {cal.calories}
                                   serving= {cal.serving}
                                   unit= {cal.unit}/>
             })
               }
       <TotalCalories calor={this.state.TotalCalories} />
     </div>
   );
 }
}

export default App;
