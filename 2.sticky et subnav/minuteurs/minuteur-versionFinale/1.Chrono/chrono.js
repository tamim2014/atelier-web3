var totalSeconds; //Nombre total de secondes sur le minuteur
//var temps = prompt("Entrer le temps","")*60;
var temps = 0;

var tempsId;
 
function timer() {
    tempsId = setInterval("Chrono()", 1000);
}


function StartTimer(){
  totalSeconds = temps; //Défini le nombre de secondes restantes
  
  //setInterval("Chrono()", 1000);// Démarrer le minuteur, régler pour s'éteindre toutes les secondes
  timer();
  
  var seconds = totalSeconds % 60; //calculer les secondes restantes
  var secondsTens = Math.floor(seconds / 10);
  var secondsOnes = seconds % 10;
  var minutes = Math.floor(totalSeconds / 60);
  
  document.getElementById("Timer").innerHTML = "" + minutes + ":" + secondsTens + secondsOnes; //montre minuterie  
  
}

function Chrono(){
  if ( totalSeconds >= 0  ) // S'il reste du temps ...
  {
    totalSeconds++; 
	var seconds = totalSeconds % 60; //Recalculer les valeurs de minuterie et afficher ensuite
    var secondsTens = Math.floor(seconds / 10);
    var secondsOnes = seconds % 10;
    var minutes = Math.floor(totalSeconds / 60);
    document.getElementById("Timer").innerHTML = "" + minutes + ":" + secondsTens + secondsOnes; 
	
	
  }
}

Chrono();


function stopChrono(){ 
  clearInterval(tempsId);
}


/**
 * RAPPEL : 2 façons d'appler une fonction
 * 1) document.getElementById("stop").addEventListener("click", stopChrono);
 * 2) onclick= " stopChrono()"   dans la page HTML
*/





