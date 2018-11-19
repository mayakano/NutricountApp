import React, { Component } from 'react'


class MealList extends Component {

    constructor(){
        super();
        this.state = {
            name: "",
            calories: "",
            totalCurrentCalories: 0,
            serving: "",
            totalCurrentServing: 0,
            unit: ""
        }
     }

     componentDidMount(){
         this.setState({
             name: this.props.foodName,
             calories: this.props.calories,
             totalCurrentCalories: this.props.calories,
             serving: this.props.serving,
             totalCurrentServing: this.props.serving,
             unit: this.props.unit
         })
     }

     addServing(){
         let newCal = this.state.totalCurrentCalories+this.state.calories;
         let newServing = this.state.totalCurrentServing+this.state.serving;
        this.setState({
            totalCurrentCalories: newCal,
            totalCurrentServing: newServing
        })
         
     }
    
    render() {
        return (

            <ul id = "meal-list">
                <li id="mealitem">  {this.state.name.charAt(0).toUpperCase() + this.state.name.slice(1)}: {this.state.totalCurrentCalories} Calories. ({this.state.totalCurrentServing} {this.state.unit}) 
                                    <input name="add" type="button" value={"Add another "+this.state.name} onClick={() => {this.props.editCalories(this.state.calories); this.addServing()}}/></li>

            </ul>

        )
    }
}

export default MealList
