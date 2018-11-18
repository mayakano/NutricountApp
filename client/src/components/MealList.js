import React, { Component } from 'react'

class MealList extends Component {
    render() {
        return (

            <div>
                <p>  {this.props.foodName} : {this.props.calories}</p>
            </div>
        )
    }
}

export default MealList
