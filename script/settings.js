function openSettings() {
  document.getElementById("settings").style.width = "250px";
}

function closeSettings() {
  document.getElementById("settings").style.width = "0px";
}

function colorChange(bg, txt, lnk) {
  document.body.style.backgroundColor = bg;
  document.body.style.color = txt;
  document.body.a.style.color = lnk;
}

function font(family, size) {
  document.body.style.fontFamily = family;
  document.body.style.fontSize = size;
}
