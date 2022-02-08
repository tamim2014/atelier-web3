var totalSeconds; //Nombre total de secondes sur le minuteur
//var temps = prompt("Entrer le temps","")*60;
var temps = 0;

function StartTimer(){
  totalSeconds = temps; //Défini le nombre de secondes restantes
  
  setInterval("Chrono()", 1000);// Démarrer le minuteur, régler pour s'éteindre toutes les secondes
  
  var seconds = totalSeconds % 60; //calculer les secondes restantes
  var secondsTens = Math.floor(seconds / 10);
  var secondsOnes = seconds % 10;
  var minutes = Math.floor(totalSeconds / 60);
  
  document.getElementById("Timer").innerHTML = "" + minutes + ":" + secondsTens + secondsOnes; //montre minuterie  
}

function stopTimer(){
	
	//setInterval("Chrono()", 10000000);
}


// Chrono
function Chrono(){
  if (totalSeconds >= 0) // S'il reste du temps ...
  {
    totalSeconds++; 
	var seconds = totalSeconds % 60; //Recalculer les valeurs de minuterie et afficher ensuite
    var secondsTens = Math.floor(seconds / 10);
    var secondsOnes = seconds % 10;
    var minutes = Math.floor(totalSeconds / 60);
    document.getElementById("Timer").innerHTML = "" + minutes + ":" + secondsTens + secondsOnes; 
	//document.getElementById("stop").addEventListener("click", stoper);
  }
}

function stoper(){
	//totalSeconds++; 
	var seconds = totalSeconds % 60; //Recalculer les valeurs de minuterie et afficher ensuite
    var secondsTens = Math.floor(seconds / 10);
    var secondsOnes = seconds % 10;
    var minutes = Math.floor(totalSeconds / 60);
    document.getElementById("Timer").innerHTML = "" + minutes + ":" + secondsTens + secondsOnes; 
}

//StartTimer();

Chrono();

