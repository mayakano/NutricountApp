import React, { Component } from 'react';
import About from './About';
import Home from './Home';
import WhyUs from './WhyUs';
import Contact from './Contact';
import '../styles/style.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';


class App extends Component {


 render() {
   return (
     <BrowserRouter className="App">

       <div>

         <a href="/"><img width="450px" class="weblogo" src="NutriCount-logo.png" /></a>
            <nav id="navigation">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/whyus">Why NutriCount?</Link></li>
              <li><Link to="/contact">Contact</Link></li>

            </ul>
            </nav>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/whyus" component={WhyUs} />
          <Route path="/Contact" component={Contact} />




      </div>

     </BrowserRouter>
   );
 }
}

export default App;
