import React, { Component } from 'react'

class TotalCalories extends Component {

    render() {
        return (
            <div>
                <p>The total calories from this meal is: {this.props.calor} </p>
            </div>
        )
    }

}

export default TotalCalories;
