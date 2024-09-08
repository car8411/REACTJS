import React from "react";

function login () {
   return <div class="login-container">

  <h2>login</h2>
  <form id="loginform"></form>
  <input type="email" id="email" placeholder="email" required></input>
  <input type="password" id="password" placeholder="password" required></input>
  <button type="submit">login
  </button>
  <p class="error" id="error"></p>
   </div>
};

export default login;