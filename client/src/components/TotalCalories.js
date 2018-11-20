import React, { Component } from 'react'

class TotalCalories extends Component {

    render() {
        return (
            <div id="totalcal">
                <p>Total Calories: <b>{this.props.calor}</b> </p>
            </div>
        )
    }

}

//CALORIES WILL BE IN AN ARRAY.
//SPLIT THAT ARRAY AND THEN WRITE A SUM FUNCTION
export default TotalCalories;
