function openSettings() {
  document.getElementById("settings").style.width = "250px";
}

function closeSettings() {
  document.getElementById("settings").style.width = "0px";
}

function colorChange(bg, txt) {
  document.body.style.backgroundColor = bg;
  document.body.style.color = txt;
}

function font(family1, family2, family3) {
  document.body.style.fontFamily = "family1,family2,family3";
}

function fontS(size) {
  document.body.style.fontSize = "size";
}
