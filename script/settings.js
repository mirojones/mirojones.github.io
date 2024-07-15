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

function font(family, size) {
  document.body.style.fontFamily = family;
  document.body.style.fontSize = size;
}

window.addEventListener("load", (event) => {
  new cursoreffects.bubblesCursor();
});
