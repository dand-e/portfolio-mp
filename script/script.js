const footer = document.getElementById("footer");
const email = document.getElementById("email");
const whatsapp = document.getElementById("whatsapp");
const linkedin = document.getElementById("linkedin");
const github = document.getElementById("github");

const direcionaClick = () => {
  console.log("clicou nimim");
  if (email.addEventListener("click", true)){
    console.log("clicou email");
  } else if(whatsapp.addEventListener("click", true)){
    console.log("clicou whatsapp");
  } else if(linkedin.addEventListener("click", true)){
    console.log("clicou linkeid")
  } else if(github.addEventListener("click", true)){
    console.log("clicou github")
  }
}

email.addEventListener("click", direcionaClick)