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

/*!
 * Bubble Cursor.js
 * - 90's cursors collection
 * -- https://github.com/tholman/90s-cursor-effects
 * -- https://codepen.io/tholman/full/qbxxxq/
 */

(function bubblesCursor() {
  
  var width = window.innerWidth;
  var height = window.innerHeight;
  var cursor = {x: width/2, y: width/2};
  var particles = [];
  
  function init() {
    bindEvents();
    loop();
  }
  
  // Bind events that are needed
  function bindEvents() {
    document.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onWindowResize);
  }
  
  function onWindowResize(e) {
    width = window.innerWidth;
    height = window.innerHeight;
  }
  
  function onTouchMove(e) {
    if( e.touches.length > 0 ) {
      for( var i = 0; i < e.touches.length; i++ ) {
        addParticle(e.touches[i].clientX, e.touches[i].clientY);
      }
    }
  }
  
  function onMouseMove(e) {    
    cursor.x = e.clientX;
    cursor.y = e.clientY;
    
    addParticle( cursor.x, cursor.y);
  }
