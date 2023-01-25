const submit = document.querySelector("#btnSubmit");
const subMessage = document.querySelector("#submitmessage");
const fname = document.querySelector("#fullname");
const email = document.querySelector("#email");
const username = document.querySelector("#keyphrase");
const table = document.querySelector("#table");
var form = document.getElementById('contact');

function handleForm(event) { 
    event.preventDefault(); 
}
form.addEventListener('submit', handleForm);


function displayNameValue(){
    document.querySelector(".fullname").textContent = fname.value;
}

function displayEmailValue(){
    document.querySelector(".email").textContent = email.value;
}

function displayUsernameValue(){
    document.querySelector(".username").textContent = username.value;
}

function displayTable(){
    table.style.display = "block"; 
}

fname.addEventListener("input", displayNameValue);
email.addEventListener("input", displayEmailValue);
username.addEventListener("input", displayUsernameValue);

