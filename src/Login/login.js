const CLIENT_ID = "59aaeb37760647ca91f9f37a591c77a9";
const REDIRECT_URI = "http://localhost:3000/../Login/login.html";
const scopes = "user-read-private user-read-email";

function authorize_user() {
  const url = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=${scopes}&show_dialog=true`;

  window.open(url, "_parent", "width=400 & height=400");
}
function setData(accessToken, expiresIn,tokenType) {
  localStorage.setItem("ACCESS_TOKEN",accessToken);
  localStorage.setItem("EXPIRES_IN",expiresIn);
  localStorage.setItem("TOKEN_TYPE",tokenType);
  
  window.location.href ="http://localhost:3000/../Dashboard/dashboard.html";
  
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".login_button");
  btn.addEventListener("click", () => {
    authorize_user();
  });
});


window.addEventListener("load", () => {
  try {
    const access_token = localStorage.getItem(ACCESS_TOKEN);
    if (access_token !== null) {
      window.location.href =
        "http://localhost:3000/../Dashboard/dashboard.html";
    }
  } catch (e) {
    console.log(e);
  }
  console.log(window !== null && !window.closed);

  if (window !== null && !window.closed) {
    // console.log('after');

    window.focus();
    //    console.log(window.location);

    if (window.location.href.includes("error")) {
      window.close();
    }
    const { hash } = window.location;
    const re_url = new URLSearchParams(hash);
    const ACCESS_TOKEN=re_url.get("#access_token");
    if (ACCESS_TOKEN !== null) {
     
    const EXPIRES_IN =re_url.get("expires_in");
    const TOKEN_TYPE=re_url.get("token_type");
    setData(ACCESS_TOKEN,EXPIRES_IN,TOKEN_TYPE);
    }
    
  }
});
