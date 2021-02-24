import React from "react"
import  './Body3.css'
import  logo from '../Picture/506-5060654_vector-cupcakes-chef-female-baker-clipart-hd-png.png'



function Body3(){
  return (
    <div className="body3">
    <div>
         <div class="flex-container6"  >
            <h1> How We Started Baking ?</h1>
         </div>
         <div className="para">
         <p>
         Our story began in 2015, when Bindu the founder of Cake Corner <br></br> baked her fist cupcakes for a group of officers and the amazing feedback<br></br> received by the delegates inspired her to think about little beyond imagination.
         <br></br>
         <br></br>
         The cakery was awesome and she was proposed to become a regular supplier of <br></br>sweet bakery. Bindu expanded the assortment and created promotional <br></br>Instagram and facebook account.
         <br></br>
         <br></br>
         Soon she decided to gather a team of like-minded people and start sher own <br></br>sweet brand and open her own store. Bindu's Cake Corner itself appeared in 2016 and has <br></br>been successfully working and backing for you!
         </p>
         <div class="flex-container7" >
            <img src={logo} alt="logo"></img>
         </div>
         </div>
         <div className="btn">
         <button type="button" name="button">Read More</button>
         </div>
         </div>

    </div>
    );
};

export default Body3;
