import React, { Component } from 'react';
import '../styles/style.css';


class MoreInfo extends Component {

  render() {
      return (
        <div id="message" class="tooltip tooltip-bottom tooltip-custom">
          <p class="tooltip-inner" >Nutrition Tip : {this.props.message}</p>
        </div>
      )
  }

}



export default MoreInfo;
