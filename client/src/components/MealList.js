import React, { Component } from 'react'


class MealList extends Component {
    render() {
        return (

            <ul id = "meal-list">
                <li>  {this.props.foodName} : {this.props.calories} ({this.props.serving} {this.props.unit})</li>

            </ul>
        )
    }
}

export default MealList
