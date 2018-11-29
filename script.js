var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

function setGradient() {
   body.style.background = "linear-gradient(to right, " 
   + color1.value + ", " 
   + color2.value + ")";

   css.textContent = body.style.background + ";";	
}

function rdmGradient() {

  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;

	}

function newGradient(){

	color1.setAttribute("value", rdmGradient());
	color2.setAttribute("value", rdmGradient());
	body.style.background = 
	"linear-gradient(to right, " + color1.value + " , " + color2.value + ")";
		
		css.textContent = body.style.background + ";" ;

}	



window.onload = function onloadGradient(){

setGradient();

}




color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", newGradient);

