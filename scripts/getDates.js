
let date =  new Date().getFullYear();
y.innerHTML = date;
let oLastModif = new Date(document.lastModified);
lastModified.innerHTML = `Last Modification: ${oLastModif}`;