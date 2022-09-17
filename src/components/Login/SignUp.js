import React from "react";
import "./Login.css";
import { useSelector,useDispatch } from "react-redux";
import { selectName,selectSurname,selectDob,selectEmail,selectPassword,selectAllow } from "./SignUpSlice";
import { addFirstName,addLastName,addDob,addEmail,addPassword,logIn } from "./SignUpSlice";
import { useHistory } from "react-router-dom";

export const SignUpForm = ()=>{
    const dispatch = useDispatch();
    const name = useSelector(selectName);
    const surname = useSelector(selectSurname);
    const dob = useSelector(selectDob);
    const email = useSelector(selectDob);
    const password = useSelector(selectPassword);
    const allow = useSelector(selectAllow);
    const history = useHistory();

    const handleName = ({target})=>{
        const name = target.value;
        dispatch(addFirstName(name));
    }

    const handleSurname = ({target})=>{
        const surname = target.value;
        dispatch(addLastName(surname));
    }

    const handleDOB = ({target})=>{
        const dob = target.value;
        dispatch(addDob(dob));
    }

    const handleEmail = ({target})=>{
      const email = target.value;
      dispatch(addEmail(email));
    }

    const handlePassword = ({target})=>{
      const password = target.value;
      dispatch(addPassword(password));
    }

    const handleSubmit = (e)=>{
      e.preventDefault();
      dispatch(logIn())
    }

    
    if(allow){
      history.push("/feed");
    }
    return(
    <section className="Form">
      <form onSubmit={handleSubmit}>
        <legend className="titale">Sign Up</legend>
        <fieldset id="name">
          <legend>First name</legend>
          <input
            className="wide"
            type="text"
            name="firstname"
            placeholder="First name"
            onChange={handleName}
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
            onChange={handleSurname}
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
            onChange={handleDOB}
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
            onChange={handleEmail}
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
            onChange={handlePassword}
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