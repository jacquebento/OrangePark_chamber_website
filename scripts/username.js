const kp1 = document.querySelector("#keyphrase");
const kp2 = document.querySelector("#keyphrase2");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "Key Phrases DO NOT MATCH!";
		message.style.display = "block";
		kp2.style.backgroundColor = "rgb(188, 231, 234)";
		kp2.style.color = "black";
		kp1.focus();
		kp1.value = "";
		kp2.value = "";
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}

