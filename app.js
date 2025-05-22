import React, { useState } from "react"; import "./app.css";

const App = () => { const [page, setPage] = useState("welcome");

const Welcome = () => ( <div className="page-container"> <div className="content-section"> <h1 className="heading">Welcome to PopX</h1> <p className="subtext"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> </div> <div className="button-section"> <button className="primary-btn" onClick={() => setPage("register")}>Create Account</button> <button className="secondary-btn" onClick={() => setPage("login")}>Already Registered? Login</button> </div> </div> );

const Login = () => ( <div className="page-container"> <h2 className="title">Login to your PopX account</h2> <p className="subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> <div className="form-section"> <input type="email" placeholder="Enter email address" className="input-field" /> <input type="password" placeholder="Enter password" className="input-field" /> <button className="primary-btn" onClick={() => setPage("profile")}>Login</button> </div> </div> );

const Register = () => ( <div className="page-container"> <h2 className="title">Create your PopX account</h2> <div className="form-section"> <input type="text" placeholder="Full Name" className="input-field" /> <input type="tel" placeholder="Phone Number" className="input-field" /> <input type="email" placeholder="Email Address" className="input-field" /> <input type="password" placeholder="Password" className="input-field" /> <input type="text" placeholder="Company Name" className="input-field" />

<div className="subtext">Are you an agency?</div>
    <div className="radio-section">
      <label><input type="radio" name="agency" /> Yes</label>
      <label><input type="radio" name="agency" /> No</label>
    </div>

    <button className="primary-btn" onClick={() => setPage("profile")}>Create Account</button>
  </div>
</div>

);

const Profile = () => ( <div className="page-container center-content"> <div className="avatar">AB</div> <h3 className="username">Aman Bansal</h3> <p className="subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> </div> );

switch (page) { case "welcome": return <Welcome />; case "login": return <Login />; case "register": return <Register />; case "profile": return <Profile />; default: return <Welcome />; } };

export default App;
