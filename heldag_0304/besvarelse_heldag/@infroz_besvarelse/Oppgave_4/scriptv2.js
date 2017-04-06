window.onload = start;

function $(id) {
	return document.getElementById(id);
}

// Filer

var figurer = [
	"Kvadrat.png",
	"Rombe.png",
	"Sirkel.jpg",
	"Trekant.png",
	"Trapes.png"
];
var vinn = new Audio("../Applaus1.mp3");
var tap = new Audio("../Galt.mp3");

var navn;

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

var runde = 0;
var tries = 3;
var riktige = 0;
var forsoek_brukt = 1;

var hovedFigur;
var alternativer = new Array();

function start() {
	navn = getCookie('name');
	genererOppgave();
}

function genererOppgave() {
	// Generer Alternativer
	var local_figurer = figurer.concat();
	local_figurer.sort(function(a, b){return 0.5 - Math.random()});
	var local_array = new Array();
	for(var i = 0; i < 4; i++) {
		local_array[i] = local_figurer[i];
	}
	
	alternativer = local_array;
	
	// Riktig figur
	
	hovedFigur = alternativer[tilfeldigHeltall((alternativer.length - 1), 0)];	// 
	//
	sjekkOppgave();
}

var brukt_alt = new Array(), brukt_hoved = new Array();

function sjekkOppgave() {
	if(brukt_alt.indexOf(alternativer) == -1) {
		if(brukt_hoved.indexOf(hovedFigur) == -1) {
			brukt_alt[brukt_alt.length] = alternativer;
			brukt_hoved[brukt_hoved.length] = hovedFigur;
			oppgaveOK();
		}
		else {
			genererOppgave();
		}
	}
	else {
		genererOppgave();
	}
}

function oppgaveOK() { // Denne legger oppgavene inn på siden
	$('hovedBilde').innerHTML = '<img src="../vedlegg/' + hovedFigur + '" class="center">';
		
	for(var i = 0; i < alternativer.length; i++) {
		var x;
		x = document.createElement('img');
		x.src = '../vedlegg/' + alternativer[i];
		x.setAttribute('class', 'rom');
		x.style.transform = 'rotate(' + (90 * tilfeldigHeltall(4,0)) + 'deg)'
		
		var verdi = alternativer[i];
		x.setAttribute('onclick', 'check("' + verdi + '")')
		$('bilder').appendChild(x);
	}
}
function check(param) { // Sjekker om du trykket på riktig figur
	if(runde <= 3) {
		if(tries > 0) {
			if(param == hovedFigur) {
				console.log('riktig');
				vinn.play();
				tries--;
				riktige++;
				$('correct').innerHTML = riktige;
				gameReset_half();
				runde++;
			}
			else if(param != hovedFigur){
				console.log('feil');
				tap.play();
				tries--;
			}
			else {
				console.error('error, feil ved check()');
			}
			$('forsoek').innerHTML = tries;
			forsoek_brukt++;
		}
		else {
			alert('Du har ikke fler forsøk igjen');
			gameReset_half();
		}
	}
	else {
		gameReset_full();
	}
}

function gameReset_full(){ // Resetter alt ved spill slutt
	runde = 0;
	riktige = 0;
	brukt_alt = [];
	brukt_hoved = [];
	$('hovedBilde').innerHTML = '';
	$('bilder').innerHTML = '';
	alert('Gratulerer du er ferdig, du brukte ' + forsoek_brukt + ' forsøk!');
	forsoek_brukt = 1;
	$('correct').innerHTML = 0;
	$('forsoek').innerHTML = 3;
	start();
}

function gameReset_half() { // Resetter litt ver runde slutt
	tries = 3;
	$('hovedBilde').innerHTML = '';
	$('bilder').innerHTML = '';
	start();
	
}

function tilfeldigHeltall(max, min) { //Gir tilldig tall mellom max og min, må være int, float funker ikke
	return Math.floor(Math.random() * (max - min + 1) + min);
}
	