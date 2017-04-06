window.onload = start;

function $(id) {
	return document.getElementById(id);
}

// Init

var riktigSvar;

function start() {
	spoersmaalStart();
	$('send').onclick = sjekkSvar;
}

var spoersmaal = [['Hvilken form er dette?', 'Firkant', 'Trekant', 'Sirkel', 'Trekant'],['Hvilken år ble Alek født?', '1999', '1997', '1998','1998']];

var ferdigeSp = new Array();

function spoersmaalStart() {
	var i = 0;
	for(var n = 0; n < spoersmaal.length; n++) {
		
	}
	$('quiz').innerHTML = spoersmaal[i][0];
	$('spa').innerHTML += spoersmaal[i][1];
	$('spb').innerHTML += spoersmaal[i][2];
	$('spc').innerHTML += spoersmaal[i][3];
	
	riktigSvar = spoersmaal[i][4];
	
	ferdigeSp[ferdigeSp.length] = i;
}

function nyttSp() {
	
}

function sjekkSvar() {
	if($('a').checked) {
		if($('spa').innerHTML == riktigSvar) {
			alert('RIKTIG');
		}
		else {
			alert('feil');
		}
	}
	else if($('b').checked) {
		if($('spb').innerHTML == riktigSvar) {
			alert('RIKTIG');
		}
		else {
			alert('feil');
		}
	}
	else if($('c').checked) {
		if($('spc').innerHTML == riktigSvar) {
			alert('RIKTIG');
		}
		else {
			alert('feil');
		}
	}
	else {
		console.log('Noe var feil');
	}
	
	nyttSp();
}

var myArray = ["1","2","3","4","5"];


function ranBetween(max, min) {
	Math.floor(Math.random() * (max - min + 1) + min);
}

myArray[ranBetween(4, 0)];

$('mittBilde').src = myArray[ranBetween(4, 0)];

