import './style.css'
// import javascriptLogo from './javascript.svg'
// import { setupCounter } from './counter.js'

document.addEventListener("DOMContentLoaded",()=>{
  if (localStorage.getItem("ACCESS_TOKEN")) {
    window.location.href =
    "http://localhost:3000/Dashboard/dashboard.html";
  } else {
    window.location.href =
        "http://localhost:3000/Login/login.html";
  }
})


