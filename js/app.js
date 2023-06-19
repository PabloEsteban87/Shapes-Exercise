const polygon1 = document.getElementById("polygon");
const rectangle1 = document.getElementById("rectangle");
const ellipse1 = document.getElementById("ellipse");

polygon1.addEventListener("click", display);
rectangle1.addEventListener("click", display2);
ellipse1.addEventListener("click", display3);

function display() {
  polygon1.style.display = "none";
}

function display2() {
  rectangle1.style.display = "none";
}

function display3() {
  ellipse1.style.display = "none";
}

const boton = document.getElementById("boton");

boton.addEventListener("click", display4);

function display4() {
    polygon1.style.display = "inline-block";
    ellipse1.style.display = "inline-block";
    rectangle1.style.display = "inline-block";
  }