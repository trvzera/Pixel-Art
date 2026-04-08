var penColor = "var(--black2)";
var main = document.getElementById("main");
var reset = document.getElementById("reset");
var pixel = document.querySelectorAll(".pixel");

function setPenColor(pen) {
  penColor = pen;
  main.style.backgroundColor = penColor;
}

function setPixelColor(pixel) {
  pixel.style.backgroundColor = penColor;
}

reset.addEventListener("click", () => {
  pixel.forEach((element) => {
    element.style.backgroundColor = "var(--white)";
  });
});
