let formulario = document.querySelector(".fala-conosco");
let mascara = document.querySelector(".mascara-form");

function cliqueiNoBotao() {
  formulario.style.left = "50%";
  formulario.style.transform = "translatex(-50%)";
  mascara.style.visibility = "visible";
}

function sumirFormulario() {
  formulario.style.left = "-330px";
  mascara.style.visibility = "hidden";
}
function clickMasc() {
  formulario.style.left = "-330px";
  mascara.style.visibility = "hidden";
}
