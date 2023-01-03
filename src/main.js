import './style.css'
// import javascriptLogo from './javascript.svg'
// import { setupCounter } from './counter.js'

document.addEventListener("DOMContentLoaded",()=>{
  if (localStorage.getItem("accessToken")) {
    window.location.href="Dashboard/dashboard.html";
  } else {
    window.location.href="Login/login.html";
  }
})


