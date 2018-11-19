import React, { Component } from 'react'

// class TotalCalories extends Component {
//     render() {
//         return (
//           var mealItems = []
//           var sum = 0;
//
//           for(var i = 0; i < mealItems.length; i++){
//           sum += mealItems[i]
//         }
//         console.log('Your meal contains ' +sum+ ' calories!');
//         )
//     }
// }
//
// export default TotalCalories
class TotalCalories extends Component {

    render() {
        return (
            <div id="totalcal">
                <p>The total calories from this meal is: <b>{this.props.calor}</b> </p>
            </div>
        )
    }



//CALORIES WILL BE IN AN ARRAY.
//SPLIT THAT ARRAY AND THEN WRITE A SUM FUNCTION
export default TotalCalories;
