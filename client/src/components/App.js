import React, { Component } from 'react';
import Input from './Input';
import MealList from './MealList';
import TotalCalories from './TotalCalories';
import MoreInfo from './MoreInfo';
import About from './About';
import Home from './Home';
import WhyUs from './WhyUs';
import Contact from './Contact';
import axios from 'axios';
import '../styles/style.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';


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
     <BrowserRouter className="App">

       <div>

          <img width="450px" class="weblogo" src="NutriCount-logo.png" />
            <nav id="navigation">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/whyus">Why NutriCount?</Link></li>
              <li><Link to="/contact">Contact</Link></li>

              </ul>
              </nav>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/whyus" component={WhyUs} />
          <Route path="/Contact" component={Contact} />




      </div>

     </BrowserRouter>
   );
 }

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



export default App;
