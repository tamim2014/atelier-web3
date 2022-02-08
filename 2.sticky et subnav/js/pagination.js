
/********************************************************************************************************************************************
 * 
 * Progamme: handiAJAX
 * Author: Andjib
 *
 * Ce script c'est un peu l'equivalent de AJAX un peu à ma sauce
 * C'est pour ça je l'appelle " handiAJAX"
 * Inspiration :replaceWith()- https://openclassrooms.com/fr/courses/1424551-jquery-ecrivez-moins-pour-faire-plus/1425188-manipuler-le-contenu
 *
 *********************************************************************************************************************************************/

$(document).ready(function(){


  // TD7 : Développement d'extension wp (plugin)

  $("#td7un").click(function(){
    $('#cible').replaceWith(' <object id="cible" data="img/d5.png"  class="chargerObjet onglet1-sujet"  style="height:80%;" ></object>');
  });


  // Mini-projet2 wordpress

  $("#projet21").click(function(){
    $('#cible').replaceWith(' <object id="cible" data="img/z1.png"  class="chargerObjet onglet1-sujet"  style="height:80%;" ></object>');
  });
  $("#projet22").click(function(){
    $('#cible').replaceWith(' <object id="cible" data="img/z2.png"  class="chargerObjet onglet1-sujet"  style="height:80%;" ></object>');
  });
  $("#projet23").click(function(){
    $('#cible').replaceWith(' <object id="cible" data="img/z3.png"  class="chargerObjet onglet1-sujet"  style="height:80%;" ></object>');
  });
  $("#projet24").click(function(){
    $('#cible').replaceWith(' <object id="cible" data="img/z4.png"  class="chargerObjet onglet1-sujet"  style="height:80%;" ></object>');
  });

});
