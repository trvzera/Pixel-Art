var penColor = "var(--black2)";
var main = document.getElementById("main");
var reset = document.getElementById("reset");
var pixel = document.querySelectorAll(".pixel");
var pallete = document.querySelectorAll(".pen");
var title = document.getElementById("title");
var art = document.getElementById("art");
var removeBorderBtn = document.getElementById("removeBorder");
var colorTitle = document.getElementById("colorTitle");
var subtitle = document.getElementById("subtitle");
var developer = document.getElementById("developer");


function setPenColor(pen, element) {
  pallete.forEach((p) => {
    p.style.transform = "scale(1)";
  });
  penColor = pen;
  main.style.backgroundColor = penColor;
  element.style.transform = "translateY(-5px)";
  title.style.color = penColor;
  colorTitle.style.color = penColor;
  reset.style.color = penColor;
  removeBorderBtn.style.color = penColor;
  reset.style.borderColor = penColor;
  removeBorderBtn.style.borderColor = penColor;
  art.style.borderColor = penColor;
  subtitle.style.color = penColor;
  developer.style.color = penColor;
  
  if (penColor == "var(--black2)") {
    reset.style.color = "black";
    removeBorderBtn.style.color = "black";
    reset.style.borderColor = "black";
    removeBorderBtn.style.borderColor = "black";
    title.style.color = "black";
  }
}

function setPixelColor(pixel) {
  pixel.style.backgroundColor = penColor;
}

reset.addEventListener("click", () => {
  pixel.forEach((element) => {
    element.style.backgroundColor = "var(--white)";
  });
});

function removeBorder() {
  pixel.forEach((element) => {
    element.classList.toggle("visualizar");
  });
  art.classList.toggle("visualizar");
  removeBorderBtn.classList.toggle("visualizar");

  var p = removeBorderBtn.querySelector("p");
  if (removeBorderBtn.classList.contains("visualizar")) {
    p.innerHTML = "Editar";
    subtitle.innerHTML = "Modo visualização";
  } else {
    p.innerHTML = "Visualizar";
    subtitle.innerHTML = "Modo edição";
  }
}

