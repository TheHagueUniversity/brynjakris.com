document.getElementById('button1').addEventListener("click", function() {
	document.querySelector('.who-modal').style.display = "flex";
});

document.querySelector('.who-modal').addEventListener("click", function() {
	document.querySelector('.who-modal').style.display = "none";
});

document.getElementById('button2').addEventListener("click", function() {
	document.querySelector('.flaedi-modal').style.display = "flex";
});

document.querySelector('.flaedi-modal').addEventListener("click", function() {
	document.querySelector('.flaedi-modal').style.display = "none";
});

document.getElementById('button3').addEventListener("click", function() {
	document.querySelector('.proj-modal').style.display = "flex";
});

document.querySelector('.proj-modal').addEventListener("click", function() {
	document.querySelector('.proj-modal').style.display = "none";
});

document.getElementById('button4').addEventListener("click", function() {
	document.querySelector('.photo-modal').style.display = "flex";
});

document.querySelector('.photo-modal').addEventListener("click", function() {
	document.querySelector('.photo-modal').style.display = "none";
});