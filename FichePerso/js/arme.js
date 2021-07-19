var Arme_Dague = document.getElementsByClassName('Arme_Dague');
var Arme_Baton = document.getElementsByClassName('Arme_Baton');


function ajoutLigne(div, nom, facteur, attaque, toucher, blesser, degat)
{
  amreLigne = document.createElement("div");
  amreLigne.className = "amreLigne";
  div.appendChild(amreLigne);
  t1 = document.createElement("div");
  t1.className = "t1";
  t1.appendChild(document.createTextNode(nom));
  amreLigne.appendChild(t1);
  t2 = document.createElement("div");
  t2.className = "t2";
  t2.appendChild(document.createTextNode(facteur));
  amreLigne.appendChild(t2);
  t3 = document.createElement("div");
  t3.className = "t3";
  t3.appendChild(document.createTextNode(attaque));
  amreLigne.appendChild(t3);
  t4 = document.createElement("div");
  t4.className = "t4";
  t4.appendChild(document.createTextNode(toucher));
  amreLigne.appendChild(t4);
  t5 = document.createElement("div");
  t5.className = "t5";
  t5.appendChild(document.createTextNode(blesser));
  amreLigne.appendChild(t5);
  t6 = document.createElement("div");
  t6.className = "t6";
  t6.appendChild(document.createTextNode(degat));
  amreLigne.appendChild(t6);
}

for (var i = 0; i < Arme_Dague.length; i++)
{
  ajoutLigne(Arme_Dague[i],"Dague",1,1,0,0,"D4")
}
for (var i = 0; i < Arme_Baton.length; i++)
{
  ajoutLigne(Arme_Baton[i],"Baton",6,1,0,0,"D6")
}
