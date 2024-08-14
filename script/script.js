function bgColor(bg) {
  document.body.style.backgroundColor = bg;
}

function textColor(txt) {
  document.body.style.color = txt;
}

function toggle(el) {
    var div = document.getElementById(el);
    
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};
