window.onload = start;

function $(id) { //Kort versjon av document.getElementById
	return document.getElementById(id);
}

function start() {
	startRotasjon();
	$('submit').onclick = navnAlderSjekk;
}

function navnAlderSjekk() {
	var navn = $('navn').value;
	var alder = $('alder').value;
	if(alder > 5 && alder < 10) {
		alert('Hei, ' + navn + '! Velkommen til vårt spill');
		$('navnAlderSjekk').innerHTML = '<a href="Oppgave_4/start.html"> Start Spill </a>';
		navn.toString();
		setCookie('name', navn, 365);
	}
	else if( alder < 6) {
		alert('Du er nok et geni som prøver deg på denne, men du er nok litt ung ennå');
	}
	else {
		alert('Du er alt for gammel for denne!');
	}
}

function setCookie(c_name,value,exdays){
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
}
function getCookie(c_name){
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++){
		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");
		if (x==c_name){
			return unescape(y);
		}
	}
}


function test() { //Test funksjon, for å sjekke om events fungerer, som f.eks onclick
	console.log('success');
}

function startRotasjon() {
	var sirkel = $('startObjekt'); // Lager en variabel for animasjonen
	musOver = false;
	y = 0;
	sirkel.onmouseover = function() { // Mus over event
		musOver = true;
	}
	sirkel.onmouseout = function() { // Mus ut event
		musOver = false;
	}
	setInterval(function() {
		if(!musOver) {  //Stopp animmasjon når mus er over
			if(y >= 360) {
				y = 0; //Reset, når figuren går over 360 grader, egentlig ikke nødvendig.
			}
			y++;
		}
		
		sirkel.style.transform = "rotate(" + y + "deg)"; //Roterer sirkel
	}, 10);
	
	// En annen løsning kunne vært å bruke clearInterval() for å stoppe animasjonen, og bruke en funksjon for å starte den på nytt igjen
}