var numberOfButtons =
	document.querySelectorAll(".button").length;

for (var j = 0; j < numberOfButtons; j++) {

document.querySelectorAll(".button")[j]
.addEventListener("click", function() {

	var buttonStyle = this.innerHTML;
	sound(buttonStyle);
	animation(buttonStyle);
});
}
document.addEventListener("keypress", function(event) {
sound(event.key);
animation(event.key);
});

function sound(key) {
switch (key) {
	case "A":
	var sound1 = new Audio("apr2.mp3");
	sound1.play();
	break;

	case "P":
	var sound2 = new Audio("ppr2.mp3");
	sound2.play();
	break;

	case "U":
	var sound3 = new Audio('upr2.mp3');
	sound3.play();
	break;

	case "R":
	var sound4 = new Audio('rpr2.mp3');
	sound4.play();
	break;
	default: console.log(key);
}
}
function animation(currentKey) {
var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("animation");

setTimeout(function() {
	activeButton.classList.remove("animation");
}, 100);
}
