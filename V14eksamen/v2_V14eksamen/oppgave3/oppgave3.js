/*
Lag en applikasjon der brukeren kan registrere data fra 2008 til 2012. Det skal
være mulig å fjerne eller endre data for et år hvis man har registrert feil antall.
Bruk data fra tabellen over.
*/
var statistikkTypeInn;
var antallInn;
var arInn;
var registrerBtn;
var regnFerrestBtn;
window.onload = function() {
  //definering av html-variabler
  statistikkTypeInn = document.getElementById("statistikkTypeInn");
  antallInn = document.getElementById("antallInn");
  arInn = document.getElementById("arInn");
  registrerBtn = document.getElementById("registrerBtn");
  regnFerrestBtn = document.getElementById("regnFerrestBtn");
  //lyttere
  registrerBtn.onclick = registrerFun;
  regnFerrestBtn.onclick = regnFerrestFun;
}
function regnFerrestFun() {
  var lavest;
  var lavestAr;
  for(i in statistikk){
    if(i == 0){ //'==' fordi typeof i returnerer 'string'
      lavest = statistikk[i].promillekjoring  + statistikk[i].ulovligHastighet;
      lavestAr = statistikk[i].ar;
    }
    else {
      if(statistikk[i].promillekjoring + statistikk[i].ulovligHastighet < lavest){
        lavest = statistikk[i].promillekjoring + statistikk[i].ulovligHastighet;
        lavestAr = statistikk[i].ar;
      }
    }
  }
  document.getElementById("tekstfelt").innerHTML = lavestAr + " er det året med lavest antall <br> registrerte lovbrudd totalt <br> med totalt " + lavest + " lovbrudd"; 
}
function registrerFun() {
  arInn = parseInt(arInn.value);
  antallInn = parseInt(antallInn.value)
  if(statistikkTypeInn.value === "promillekjoring"){
    for(i in statistikk){
      if (statistikk[i].ar == arInn) {
        statistikk[i].promillekjoring = antallInn;
      }
    }
  }
  else if(statistikkTypeInn.value === "ulovligHastighet"){
    for(i in statistikk){
      if (statistikk[i].ar == arInn) {
        statistikk[i].ulovligHastighet = antallInn;
      }
    }
  }
  //BONUS
  lagTabell(statistikk, "oversikt");
}
function lagTabell(arr, tableId) {//forventer et array med objekter
  /*Vil lage en enkel tabell (styles i etterkant) som har
  rader for hver indeks i arrayet og kolonner for hvert av
  punktene i objektet. Skal fungere uavhengig av hva objektene
  inneholder*/
  console.log("oppdaterer oversikt");
  document.getElementById(tableId).innerHTML = "";
  for(i in arr){ //løkke gjennom alle objekter
    var nyTr = document.createElement("tr");
    for(x in arr[i]){ //løkke gjennom hvert enkelt objekt
      var nyTd = document.createElement("td");
      nyTd.innerHTML = arr[i][x];
      nyTr.appendChild(nyTd);
    }
    document.getElementById(tableId).appendChild(nyTr);
  }
}
