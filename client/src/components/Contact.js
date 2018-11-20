import React, { Component } from 'react';
import axios from 'axios';
import '../styles/style.css';


class Contact extends React.Component {
  constructor(){
    super();
    this.state = {
        sent: false
    }
 }

  sendmailfunc = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const text = e.target.elements.text.value;
    axios.get(`/sendMail/${name}/${email}/${text}`).then((res) => {
      let data = res;
      this.setState({sent: data});
    })
  }
 render() {
  if (this.state.sent===false){ 
   return (
  
       <div id="form-main">
        <h1 class="teamtitle">Contact Us</h1>

       <div id="form-div">
         <form class="form" id="form1" action="" onSubmit={this.sendmailfunc}>

           <p class="name">
             <input name="name" type="text" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Name" id="name" />
           </p>

           <p class="email">
             <input name="email" type="text" class="validate[required,custom[email]] feedback-input" id="email" placeholder="Email" />
           </p>

           <p class="text">
             <textarea name="text" class="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Message"></textarea>
           </p>


           <div class="submit">
             <input type="submit" value="Send" id="button-blue" />
             <div class="ease"></div>
           </div>
         </form>
       </div>
       </div>

   )
  }else{
    return (
      <p class="sent-confirm">Thank you for your message! We will get back to you as soon as possible.</p>
    )
  }
 }
}

export default Contact;
