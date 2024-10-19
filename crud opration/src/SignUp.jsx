import axios from "axios";
import React, { useState } from "react";
import Header from "./components/Header";


export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [accept, setAccept] = useState(false);
  const[erroremail,setErroremail]=useState()

  async function submit(e) {
    let flag=true
    e.preventDefault();
    setAccept(true);
    if (name === "" || password.length < 8 || passwordR !== password) {
      flag=false
    }else flag=true
    try {
      if (flag === true) {
        let res = await axios
          .post("http://127.0.0.1:8000/api/register", {
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordR,
          })
          if (res.status==200) {
            window.localStorage.setItem('email',email)
            window.location.pathname='/'

            
          }
      }
    } catch (error) {
      setErroremail(error.response.status);
      
    }
 
  }

  return (
<div>
<Header />


    <div className="parent">

      <div className="register">
        <form onSubmit={submit}>
          <label htmlFor="name">name:</label>
          <input
            id="name"
            type="text"
            placeholder="Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {name === "" && accept && (
            <p className="error">userName is required</p>
          )}

          <label htmlFor="Email">Email:</label>
          <input
            id="Email"
            type="Email"
            placeholder="Email..."
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {accept &&erroremail===422&&<p className="error">the email is already been taken</p>}
          <label htmlFor="passwoed">passwoed:</label>
          <input
            id="passwoed"
            type="passwoed"
            placeholder="passwoed..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {password.length < 8 && accept && (
            <p className="error">must be more than 8 Char</p>
          )}

          <label htmlFor="password2">repeet passwoed:</label>
          <input
            id="passwoed2"
            type="passwoed"
            placeholder="repeet password..."
            value={passwordR}
            onChange={(e) => setPasswordR(e.target.value)}
          />
          {passwordR !== password && accept && (
            <p className="error">password does not match</p>
          )}
          <div style={{ textAlign: "center" }}>
            <button type="submet">Register</button>
          </div>
    
        </form>
      </div>
      </div>

    </div>
  );
}
