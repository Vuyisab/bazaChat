import React from "react";
import "../Login/Login.css"

export const replyForm = ()=>{


    return(
        <section className="Form">
      <form >
        <legend className="titale">Sign Up</legend>
        <fieldset id="name">
          <legend>First name</legend>
          <input
            className="wide"
            type="text"
            name="firstname"
            placeholder="First name"
            
          />
        </fieldset>
        <br />
        <fieldset id="name">
          <legend>Last name</legend>
          <input
            className="wide"
            type="text"
            name="lastname"
            placeholder="Last name"
            
          />
        </fieldset>
        <br />
        <fieldset id="name">
          <legend>Date of Birth</legend>
          <input
            className="wide"
            type="date"
            name="dob"
            placeholder="DD/MM/YYYY"
            
          />
        </fieldset>
        <br />
        <fieldset id="name">
          <legend>Email address</legend>
          <input
            className="wide"
            type="email"
            name="email"
            placeholder="Email Address"
            
          />
        </fieldset>
        <br />
        <fieldset id="password">
          <legend>Password</legend>
          <input
            className="wide"
            type="password"
            name="password"
            placeholder="Enter your password"
            
          />
        </fieldset>
        <br />
        <br />
        <input
          className="submit float"
          type="submit"
          value="sign Up"
          
        />
      </form>
    </section>
    )
}