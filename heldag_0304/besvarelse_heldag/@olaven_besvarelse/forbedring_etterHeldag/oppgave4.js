var bilder = []
bilder.push({filnavn:"bilder/firkant.jpg", tekst:"firkant"})
bilder.push({filnavn:"bilder/sirkel.jpg", tekst:"sirkel"})
bilder.push({filnavn:"bilder/trekant.jpg", tekst:"trekant"})
bilder.push({filnavn:"bilder/rombe.jpg", tekst:"rombe"})
bilder.push({filnavn:"bilder/trapes.jpg", tekst:"trapes"})

var teller = 0;

var antallGjett = 0;
var antallRiktig = 0;
var antallTrukket = 0;

var oppgaveOversikt = [];

var logArr = [] //push antallGjett og bilde.id, print til slutt
window.onload = oppstart;
function oppstart() {
  plasserBilder(bilder, "gjettFelt");
  var stokkedeBilder = stokkArr(bilder); //hensikt er å få tilfeldige bilder for hver gjennomspilling

  document.getElementById("trekkBildeBtn").onclick = function trekkBilde(){
    antallGjett = 0;
    plasserBilder(bilder, "gjettFelt");

    var tilfeldigBilde = document.createElement("img");
    tilfeldigBilde.id = "tilfeldigBilde";
    tilfeldigBilde.src = stokkedeBilder[teller].filnavn;
    if(teller < bilder.length - 1){
      teller++;
    }
    else {
      teller = 0;
    }
    //posisjoner i css
    document.getElementById("tilfeldigBildeFelt").innerHTML = "";
    document.getElementById("tilfeldigBildeFelt").appendChild(tilfeldigBilde);
    if(antallTrukket >= bilder.length){
      printOversikt();
    }
    antallTrukket++;
  }

}
function printOversikt(){
  //når spillet er over:
  //kort info
  document.body.innerHTML = "";
  var tekstVedSlutt = document.createElement("p");
  tekstVedSlutt.innerHTML = "Hei! Nå er spillet over. Trykk på hvilken som helst knapp for å prøve igjen!"
  tekstVedSlutt.style.fontSize = "4em";
  tekstVedSlutt.style.color = "rgb(141, 39, 176)";
  tekstVedSlutt.style.backgroundColor = "rgb(34, 159, 177)";

  document.body.appendChild(tekstVedSlutt);

  for(i in oppgaveOversikt){
    var nyOversikt = document.createElement("div");
    nyOversikt.style.fontSize = "2em";
    nyOversikt.innerHTML = "Du brukte " + oppgaveOversikt[i].forsok + " forsøk på å gjette " + oppgaveOversikt[i].bilde + "<br>";

    document.body.appendChild(nyOversikt)
  }

  document.onkeydown = function(){
    location.reload();
  }
}
function plasserBilder(arr, feltId) {//forventer et arr med .filnavn
  var tilfeldigArr = stokkArr(arr);
  document.getElementById(feltId).innerHTML = "";
  for(i in arr){
    var nyttBilde = document.createElement("img");
    nyttBilde.src = tilfeldigArr[i].filnavn;
    nyttBilde.id = tilfeldigArr[i].tekst //denne brukes til å gjenkjenne senere
    nyttBilde.onclick = bildeKlikket;

    document.getElementById(feltId).appendChild(nyttBilde);
  }
}
function bildeKlikket(evt) {
  antallGjett++;
  var audio;
  if(evt.target.src === document.getElementById("tilfeldigBilde").src){
    //lydbit:
    audio = new Audio("lyder/applaus.mp3");
    audio.play();

    oppgaveOversikt.push({forsok: antallGjett, bilde: evt.target.id});

    document.getElementById("tilbakemelding").style.backgroundColor = "rgb(49, 186, 254)";
    document.getElementById("tilbakemelding").innerHTML = "Helt riktig! Du brukte " + antallGjett + "forsøk. Bra!";
    antallRiktig++;
    if(antallRiktig >= bilder.length){
      document.getElementById("tilbakemelding").innerHTML +=  "<span onclick='location.reload()'> <br>Start på nytt </span>";
      document.getElementById("trekkBildeBtn").onclick = "";
      document.getElementById("trekkBildeBtn").style.opacity = "0.5";
      printOversikt();
    }
  }
  else {
    //lydbit:
    audio = new Audio("lyder/galt.mp3");
    audio.play();

    document.getElementById("tilbakemelding").innerHTML = "Feil, men godt forsøk! Prøv igjen!"
    document.getElementById("tilbakemelding").style.backgroundColor = "rgb(49, 186, 254)";
  }
}
function stokkArr(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
