window.onload = start;

function $(id) { //Kort versjon av document.getElementById
	return document.getElementById(id);
}

// KODE FOR SIDEN ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

	// Filer
	var figurer = [
		"Kvadrat.png",
		"Rombe.png",
		"Sirkel.jpg",
		"Trekant.png",
		"Trapes.png"
	];
	var vinn = new Audio('../Applaus1.mp3');
	var tap = new Audio('../Galt.mp3');

	// Videre kode
	var tries = 3;
	
	function start() {
		genererOppgave();
		$('forsoek').innerHTML = tries;
	}
	
	var forsoek_brukt = 0;
	var hovedFigur;
	var alternativer;

	var brukt_hovedFigur = new Array();
	var brukt_alternativer = new Array();
	
	function genererOppgave() {
		var begrenset_list = figurer.concat();
		begrenset_list.sort(function(a, b){return 0.5 - Math.random()});
		
		var ny_list = new Array();
		for(var i = 0; i < 4; i++){
			ny_list[i] = begrenset_list[i];
		}
		
		generer_hovedFigur();
		generer_alternativer();
		
		function generer_hovedFigur() {
			hovedFigur = ny_list[tilfeldigHeltall((ny_list.length -1), 0)];
			
		}
		
		function generer_alternativer() {
			var local_array = ny_list.concat();
			alternativer = local_array.sort(function(a, b){return 0.5 - Math.random()});
			
		}
		
		console.log(hovedFigur);
		console.log(alternativer);
		
		var x;
		var checked = new Array();
		// Sjekk alternativer
		for(var i = 0; i < brukt_alternativer.length; i++) {
			if(brukt_alternativer[i] == alternativer) {
				x++
			}
		}
		console.log(x);
		if(x > 0) {
			genererOppgave();
		}
		x = 0
		// Sjekk hoved Figur
		for(var i = 0; i < brukt_hovedFigur.length; i++) {
			if(brukt_hovedFigur[i] == alternativer) {
				x++
			}
		}
		console.log(x);
		if(x > 0) {
			genererOppgave();
		}
		brukt_hovedFigur[brukt_hovedFigur.length] = hovedFigur;
		brukt_alternativer[brukt_alternativer.length] = alternativer;
		visOppgave();
	}
	
	function visOppgave() {
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

	var riktige = 0;
	
	function check(param) { // Sjekker om du trykket på riktig figur
		if(tries > 0) {
			if(param == hovedFigur) {
				console.log('riktig');
				vinn.play();
				tries--;
				riktige++;
				$('correct').innerHTML = riktige;
				gameReset_half();
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
	
	function gameReset_half() {
		tries = 3;
		$('hovedBilde').innerHTML = '';
		$('bilder').innerHTML = '';
		start();
		
	}
	
	function tilfeldigHeltall(max, min) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	
	/*function randomSort(array) {
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	}*/