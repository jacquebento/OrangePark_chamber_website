
let date =  new Date().getFullYear();
y.innerHTML = date;

let modify = document.lastModified;
document.querySelector("#lastModified").innerHTML = `Last modified: ${modify}`;
document.querySelector(".date").value = modify;