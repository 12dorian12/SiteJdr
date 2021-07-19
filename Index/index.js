var enHaut = document.getElementById("enHaut");
var enBas = document.getElementById("enBas");
window.addEventListener ("mousemove",function(e){
    if (e.clientX<window.innerWidth/2) {
        enHaut.style.filter= "drop-shadow(0 0 10px silver)";
        enBas.style.filter= "none";
    } 
    else {
        enBas.style.filter= "drop-shadow(0 0 10px gold)";
        enHaut.style.filter= "none";
    }
}) 
