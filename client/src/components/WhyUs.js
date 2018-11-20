import React, { Component } from 'react';
import '../styles/style.css';

class WhyUs extends React.Component {
 render() {
   return (
     <div class="whyusdiv">
     <h1 class="teamtitle">Why Us</h1>

     <p class="whyustext fade-in two" id="boxTwo">NutriCount is the #1 online platform to calculate the amount of calories in food items. Before you buy anything or dig into your meal, use our online calculator by picking all the food items from our large database.</p>
     <img width="400" id="boxOne" class="whyusimg fade-in one" src="healthyfood.jpg" />

     </div>
)
}
}

export default WhyUs;
