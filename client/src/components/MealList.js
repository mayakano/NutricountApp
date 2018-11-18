import React, { Component } from 'react'

class MealList extends Component {
    render() {
        return (

            <div>
                {
                     this.props.calories.map( (day, i) => {
                        
                       return  <p>  {this.props.foodName} : {day}</p>
                      })
                }
                <p>  {this.props.foodName} : {this.props.calories}</p>
            </div>
        )
    }
}

export default MealList
