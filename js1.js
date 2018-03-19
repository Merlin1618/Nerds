var link = document.querySelector(".login");
var popup= document.querySelector(".popup");
var close = document.querySelector(".close");
var slider = document.querySelector(".slider");
var overlay = document.querySelector(".modal-overlay");
var slider1 = slider.querySelector("#slider1_1");
var slider2 = slider.querySelector("#slider1_2");
var slider3 = slider.querySelector("#slider1_3");
var slider11 = slider.querySelector(".slider11");
var slider22 = slider.querySelector(".slider22");
var slider33 = slider.querySelector(".slider33");
var form = popup.querySelector("form");
var name = form.querySelector("[type=name]");
var email = form.querySelector("[type=email]");
var text = form.querySelector("[type=text]");
// var label = slider1.querySelector("input");


link.addEventListener("click", function(event){
	event.preventDefault();
	popup.classList.add("popup-show");
	overlay.classList.remove("visibility-hidden");
});

close.addEventListener("click", function(event){
	event.preventDefault();
	popup.classList.remove("popup-show");
	overlay.classList.add("visibility-hidden");
});

slider1.addEventListener("click", function(event){
	slider11.classList.remove("hidden");
	slider11.classList.add("active");
	slider22.classList.add("hidden");
	slider33.classList.add("hidden");
});

slider2.addEventListener("click", function(event){
	slider11.classList.add("hidden");
	slider22.classList.remove("hidden");
	slider22.classList.add("active");
	slider33.classList.add("hidden");
});
slider3.addEventListener("click", function(event){
	slider11.classList.add("hidden");
	slider22.classList.add("hidden");
	slider33.classList.add("active");
	slider33.classList.remove("hidden");
});

form.addEventListener("submit", function(event){
	if(!name.value){
		event.preventDefault();
		alert("Имя?!");}
});

form.addEventListener("submit", function(event){
	if(!email.value){
		event.preventDefault();
		alert("Без имэйла никуда!");}
});
