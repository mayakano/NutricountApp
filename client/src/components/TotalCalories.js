import React, { Component } from 'react'

class TotalCalories extends Component {

    render() {
        return (
            <div id="totalcal">
                <p>The total calories from this meal is: <b>{this.props.calor}</b> </p>
            </div>
        )
    }

}

export default TotalCalories;
