Système de notation par étoiles-------------------------------
Url     : http://codes-sources.commentcamarche.net/source/33933-systeme-de-notation-par-etoilesAuteur  : ScraatDate    : 06/08/2013
Licence :
=========

Ce document intitulé « Système de notation par étoiles » issu de CommentCaMarche
(codes-sources.commentcamarche.net) est mis à disposition sous les termes de
la licence Creative Commons. Vous pouvez copier, modifier des copies de cette
source, dans les conditions fixées par la licence, tant que cette note
apparaît clairement.

Description :
=============

Ce script vous permet de mettre facilement en place un syst&egrave;me de notatio
n, comme celui de codes-sources.
<br />Je ne donne ici que la partie Javascript
, c'est &agrave; vous d'adapter ce script &agrave; vos besoins en cr&eacute;ant 
la partie c&ocirc;t&eacute; serveur.
<br /><a name='source-exemple'></a><h2> So
urce / Exemple : </h2>
<br /><pre class='code' data-mode='basic'>
&lt;html&gt
;
&lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset
=iso-8859-1&quot;&gt;

&lt;head&gt;
&lt;script&gt;
&lt;!-- 
StarOutUrl=		'S
tarOut.gif';		//image par défaut
StarOverUrl=		'StarOver.gif';		//image d'une é
toile sélectionnée
StarBaseId=		'Star';			//id de base des étoiles
NbStar=			1
0;			//nombre d'étoiles

LgtStarBaseId=StarBaseId.lastIndexOf('');

function
 NotationSystem() {
	for (i=1;i&lt;NbStar+1;i++) {
		var img			=document.getEl
ementById('Star'+i);
			
		img.onclick		=function() {alert('Vous avez donné la
 note de '+Name2Nb(this.id)+'.');};
		//Réaction lors du clic sur une étoile
	
	//Evidemment, il faudrait compléter cette fonction pour la rendre vraiment util
e.
		//Par exemple, envoyer la note dans une base de donnée via un XMLHttpReque
st.
		
		img.alt			='Donner la note de '+i;
		//Texte au survol
		
		img.sr
c			=StarOutUrl;
		img.onmouseover	=function() {StarOver(this.id);};
		img.onm
ouseout	=function() {StarOut(this.id);};
	}
}

function StarOver(Star) {
	S
tarNb=Name2Nb(Star);
	for (i=1;i&lt;(StarNb*1)+1;i++) {
		document.getElementB
yId('Star'+i).src=StarOverUrl;
	}
}

function StarOut(Star) {
	StarNb=Name2
Nb(Star);
	for (i=1;i&lt;(StarNb*1)+1;i++) {
		document.getElementById('Star'+
i).src=StarOutUrl;
	}
}

function Name2Nb(Star) {
	//Le survol d'une étoile
 ne nous permet pas de connaître directement son numéro
	//Cette fonction extra
it donc ce numéro à partir de l'Id
	StarNb=Star.slice(LgtStarBaseId);
	return(
StarNb);
} 
--&gt;
&lt;/script&gt;
&lt;/head&gt;

&lt;body onload=&quot;No
tationSystem();&quot;&gt;
&lt;!-- 
Vous pouvez mettre un nombre quelconque d'é
toiles, veillez juste à mettre à jour la variable NbStar. 
Par défaut, les étoi
les sont &quot;éteintes&quot; : si un utilisateur a désectivé JS il ne pourra pa
s voter mais le script ne plantera pas
--&gt;
&lt;img id=&quot;Star1&quot; src
=&quot;StarOut.gif&quot; /&gt;&lt;img id=&quot;Star2&quot; src=&quot;StarOut.gif
&quot; /&gt;
&lt;img id=&quot;Star3&quot; src=&quot;StarOut.gif&quot; /&gt;&lt;
img id=&quot;Star4&quot; src=&quot;StarOut.gif&quot; /&gt;
&lt;img id=&quot;Sta
r5&quot; src=&quot;StarOut.gif&quot; /&gt;&lt;img id=&quot;Star6&quot; src=&quot
;StarOut.gif&quot; /&gt;
&lt;img id=&quot;Star7&quot; src=&quot;StarOut.gif&quo
t; /&gt;&lt;img id=&quot;Star8&quot; src=&quot;StarOut.gif&quot; /&gt;
&lt;img 
id=&quot;Star9&quot; src=&quot;StarOut.gif&quot; /&gt;&lt;img id=&quot;Star10&qu
ot; src=&quot;StarOut.gif&quot; /&gt;
&lt;/body&gt;

&lt;/html&gt;
</pre>
<
br /><a name='conclusion'></a><h2> Conclusion : </h2>
<br />Voil&agrave; c'est
 tr&egrave;s simple mais &ccedil;a permettra peut-&ecirc;tre &agrave; certains d
e gagner du temps.
<br />Vous pouvez mettre autant d'&eacute;toiles que vous vo
ulez. 
<br />Test&eacute; sur Firefox et sur IE.
