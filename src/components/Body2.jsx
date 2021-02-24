import React from "react"
import  './Body2.css'
import  logo from '../Picture/food-photographer-david-fedulov-xZ_IK68a2Io-unsplash.jpg'
import  logo1 from '../Picture/annie-spratt-6SHd7Q-l1UQ-unsplash.jpg'


function Body2(){
  return (
    <div >
         <div class="flex-container2" >
            <img src={logo} alt="logo"></img>
         </div>
         <div class="flex-container3" >
            <img src={logo1} alt="logo"></img>
         </div>
         <div class="flex-container4" >
         <p>
         Bindu’s ultimate goal is to satisfy our clients and their sweet taste buds.<br></br>
          Our cakery provides superior products, being both attractive and yummy! Our<br></br>
          regular clients state we are the best, but we never stop developing our recipes.<br></br>
           We continue exploring this fascinating sweet world!
         </p>
         </div>
    </div>
    );
};

export default Body2;
