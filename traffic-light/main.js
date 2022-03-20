document.getElementById("red").onclick = makeRed;
function makeRed() {
  clearLight();
  document.getElementById("redLight").style.backgroundColor = "red";
}

document.getElementById("yellow").onclick = makeYellow;
function makeYellow() {
  clearLight();
  document.getElementById("yellowLight").style.backgroundColor = "yellow";
}

document.getElementById("green").onclick = makeGreen;
function makeGreen() {
  clearLight();
  document.getElementById("greenLight").style.backgroundColor = "green";
}

function clearLight() {
  document.getElementById("redLight").style.backgroundColor = "black";
  document.getElementById("yellowLight").style.backgroundColor = "black";
  document.getElementById("greenLight").style.backgroundColor = "black";
}