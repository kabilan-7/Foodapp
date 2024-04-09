import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {
    const [currState,setCurrState]=useState("Login")
  return (
    <div className='LoginPopup'>
        
        <form className='LoginPopup-container'>
            <div className='LoginPopup-title'>
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)}src={assets.cross_icon}/>
            </div>
            <div className='LoginPopup-input'>
                {currState==="Login"?<></>:<input type='text' placeholder='Your name' required></input>}
              
              <input type='email' placeholder='Your email' required></input>
              <input type='password' placeholder='password'></input>
            </div>
            <button>{currState==="Sign Up"?"Create account":"Login"}</button>
            <div className='LoginPopup-condition'>
                <input type='checkbox' required></input>
                <p>By continuing, i agree to the terms of use & privacy policy</p>
            </div>{currState==="Login"?
            <p>Create a new account?<span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>:
            <p>Already have an account? <span onClick={()=>setCurrState("Login")} >Login here</span></p>}
            </form>
        </div>
    
  )
}

export default LoginPopup