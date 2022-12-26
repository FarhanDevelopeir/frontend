import React from 'react'
import './signup.css'
import Header from '../header'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '/node_modules/bootstrap/dist/css/bootstrap.css'

const Signup = () => {
  return (
    <div>
        <Header/>
         <center>
    <div class="form text-center  " style={{marginTop:'200px'}}>
        <h2>Signup</h2>
        <input type="number" name="NUMBER" placeholder="Enter Phone number Here"/>
        <input type="password" name="password" placeholder="Enter password Here"/>

        <p class="link">Don't have an account</p>
   
        <h3><a href="#">Signup Here</a></h3>
 
   
        <p class="liw"> Log in with</p>
        
        
    </div>
    </center>

    </div>
    
    


   
  )
}

export default Signup