var ficheTab = document.getElementById('ficheTab');
var nameTab = document.getElementById('nameTab');
var stateTab = document.getElementById('stateTab');

function redim(){
  sizeTab = ficheTab.getBoundingClientRect();
  nameTab.style.fontSize = sizeTab.width/20+"px";
  stateTab.style.fontSize = sizeTab.width/30+"px";
}

window.onresize = redim;
redim();
