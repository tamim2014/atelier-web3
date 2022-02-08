	/******
     * Scroll contenu
     * Author: Andjib
     * Date: Samedi 07 Mars 2020
     */	 

	window.onscroll = function(){ myFunction() };
	
	var menu = document.getElementById("menu"); 
			
	var sidbarG = document.getElementById("sidbarG"); 
	var sidbarD = document.getElementById("sidbarD");
	var contenu_ = document.getElementById("contenu_"); 		
	
	//var positionInitialeSG = sidbarG.offsetTop;
	var positionInitiale = menu.offsetTop;

	function myFunction() {
	  //if (window.pageYOffset > positionInitialeSG){
	  if (window.pageYOffset > positionInitiale){
		
		menu.classList.add("stickyNavbar");
	  
		sidbarG.classList.add("stickySidbarG");
		sidbarD.classList.add("stickySidbarD");
		contenu_.classList.add("stickyContenu");
	  } else {
	  
		menu.classList.remove("stickyNavbar");
	  
		sidbarG.classList.remove("stickySidbarG");
		sidbarD.classList.remove("stickySidbarD");
		contenu_.classList.remove("stickyContenu");			
	  }
	}

	