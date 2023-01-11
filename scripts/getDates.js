
let date =  new Date().getFullYear();
y.innerHTML = date;
let oLastModif = new Date(document.lastModified);
let showAs = oLastModif.getDate() + "-" + (oLastModif.getMonth() + 1) + "-" + oLastModif.getFullYear();
lastModified.innerHTML = `Last Modification: ${showAs}`;