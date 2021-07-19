var ficheTab = document.getElementById('ficheTab');
var nameTab = document.getElementById('nameTab');
var stateTab = document.getElementById('stateTab');
var stateNumPlus = document.getElementsByClassName('stateNumPlus');
var lifeTab = document.getElementById('lifeTab');
var defTable = document.getElementById('defTable');
var invMaitTab = document.getElementById('invMaitTab');
var armeTab = document.getElementById('armeTab');
var armeScroll = document.getElementById('armeScroll');

function globalResize()
{
  //taille de notre fiche
  sizeTab = ficheTab.getBoundingClientRect();

  //gestion des police
  nameTab.style.fontSize = sizeTab.width/20+"px";
  stateTab.style.fontSize = sizeTab.width/30+"px";
  lifeTab.style.fontSize = sizeTab.width/30+"px";
  defTable.style.fontSize = sizeTab.width/30+"px";
  invMaitTab.style.fontSize = sizeTab.width/30+"px";
  armeTab.style.fontSize = sizeTab.width/30+"px";
  for (var i = 0; i < stateNumPlus.length; i++)
  {
      stateNumPlus[i].style.fontSize = sizeTab.width/50+"px";
  }
  //gestion des border
  nameTab.style.borderWidth = sizeTab.width/150+"px";
  lifeTab.style.borderWidth = sizeTab.width/150+"px";
  nameTab.style.borderRadius = sizeTab.width/40+"px";
  lifeTab.style.borderRadius = sizeTab.width/40+"px";

  //gestion des taille
  defTable.style.height = sizeTab.width/3.8+"px";
  defTable.style.width = sizeTab.width/3.8+"px";


  //autres
  ficheTab.style.filter = "drop-shadow(0 0 "+sizeTab.width/50+"px teal)";
  console.log(sizeTab.width)
}

window.onresize = globalResize;

demarage(globalResize)
