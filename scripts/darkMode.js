
const darkButton = document.querySelector(".darkButton");
const main = document.querySelector("main");
const links = document.querySelectorAll(".link");
const cards = document.querySelectorAll("h3");

darkButton.addEventListener("click", () => {
	if (darkButton.textContent.includes("☑️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
        links.forEach((item) => item.style.color = "white");
		cards.forEach((item) => item.style.background = "gray");
		darkButton.textContent = "Dark Mode ❎";
	} else {
		main.style.background = "white";
		main.style.color = "#000";
        links.forEach((item) => item.style.color = "black");
		cards.forEach((item) => item.style.background = "rgb(247, 199, 199)");
		darkButton.textContent = "Dark Mode ☑️";
	}
});
 