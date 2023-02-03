const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");

gridbutton.addEventListener("click", () => {
    display.style.display = "grid";
})

listbutton.addEventListener("click", () => {
    display.style.display = "block";
})


