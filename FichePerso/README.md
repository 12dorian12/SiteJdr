########################################################################################
########################################################################################
########################################################################################



<link href="http://fonts.cdnfonts.com/css/kingthings-spikeless" rel="stylesheet">

permet de récupérer une police en ligne



########################################################################################
########################################################################################
########################################################################################



<div id="backgroundTab">
  <div><div id="ficheTab">
  </div></div>
</div>

...Permet de crée un cadre a ratio constant.
...C'est a dire que si l'écran change de taille le cadre n'est pas déformé.

#backgroundTab{
  margin: 0 auto;
  width: 33.33%;
  min-width: 300px;
}
#backgroundTab > div{
  width: 100%;
  padding-bottom: 135%;
  position: relative;
}
#ficheTab{
  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0;
  padding: 10%;

  background-image: url("../add/scrol_1653x2230.png");
  background-size: cover;
  background-repeat: no-repeat;
}

...Le premier cadre définit la taille et la position relative a l'écran.
...Le second définit le ratio car le % d'un padding ce fait selon la larguer du cadre
...On passe sa position en relative pour le 3e cadre
...Le 3e cadre et celui de travaille
...On passe ca position en absolue pour ne pas déformer sont contenue
...Comme le conteneur parent est relative on peut étendre  la position absolue a tout le conteneur :
...top: 0; bottom: 0; left: 0; right: 0;


########################################################################################
########################################################################################
########################################################################################



<div id="invTab"><div>
  Arme : Gourdin, Dague, Fléchette, Javeline, Masse d'arme, Bâton, Cimeterre, Fronde, Serpe, Lance.
  Armure : Légères, intermédiaire, bouclier.
</div></div>
<div id="maitriseTab"><div>

</div></div>

...je double les div pour pouvoir modifier les scrollbar sans problèmes

#invTab{
  border-right: 1px solid;
  direction: rtl;
}
#invTab>div, #maitriseTab>div{
  direction: ltr;
}

...je change la directionen en mode droite a gauche pour mettre la scrollbar a gauche
...je repasse la direction en mode gauche a droite
