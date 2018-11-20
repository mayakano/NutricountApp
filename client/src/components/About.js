import React, { Component } from 'react';
import '../styles/style.css';

class About extends React.Component {
 render() {
   return (
   <div>


     <h1 class="teamtitle">The Team</h1>

       <div class="at-grid" data-column="3">
         <div class="at-column">
           <div class="at-user">
             <div class="at-user__avatar"><img src="../../steven.png"/></div>
             <div class="at-user__name">Steven Capuzzi</div>
             <div class="at-user__title">Co-Founder & Lead Developer</div>
             <a target="_blank" target="_blank" href="https://github.com/stevencapuzzi"><img width="20" src="../../github.png" /></a>

           </div>
         </div>
         <div class="at-column">
           <div class="at-user">
             <div class="at-user__avatar"><img src="../../maya.png"/></div>
             <div class="at-user__name">Maya Kano</div>
             <div class="at-user__title">Co-Founder & Lead Developer</div>
             <a target="_blank" href="https://github.com/mayakano"><img width="20" src="../../github.png" /></a>

           </div>
         </div>
         <div class="at-column">
           <div class="at-user">
             <div class="at-user__avatar"><img src="../../isabel.png"/></div>
             <div class="at-user__name">Isabel Virgille</div>
             <div class="at-user__title">Co-Founder & Lead Developer</div>
             <a href="https://github.com/ivirgille"><img width="20" src="../../github.png" /></a>

           </div>
         </div>
         <div class="at-column">
           <div class="at-user">
             <div class="at-user__avatar"><img src="../../ryan.png"/></div>
             <div class="at-user__name">Ryan Naamani</div>
             <div class="at-user__title">Co-Founder & Lead Developer</div>
             <a target="_blank" href="https://github.com/ryannaamani"><img width="20" src="../../github.png" /></a>

           </div>
         </div>
       </div>

       <div class="whyusdiv">
       <p>At NutriCount, we value your health first & foremost. We created the calorie calculator with the goal of helping you make better decisions before you consume anything. We take health very seriously.</p>
       <img width="400" id="boxOne" class="aboutimg fade-in one" src="nutrition-count.jpg" />

       </div>


     </div>
)
}
}

export default About;
