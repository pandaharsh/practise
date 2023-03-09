function colour() {
  document.getElementById("header").style.backgroundColor = "red";
}
function change() {
  document.getElementById("sidebar").innerHTML = "Leftbar";
  document.getElementById("sidebar").style.fontSize = "30px";
}
function fade() {
  document.getElementById("main-content").style.opacity = "0.2";
}

function popupOn() {
  document.getElementById("popup").style.display = "flex";
}
function popupOff() {
  document.getElementById("popup").style.display = "none";
}
