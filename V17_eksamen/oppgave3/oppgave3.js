var regVindstyrker = [] /*skal holde på 4 indekser med informasjon om vinstyrken i
sin respektive periode */
var hentedeWatt = [] /*skal holde 4 indekser med wattproduksjon PER TIME for hver
av de registrerte periodene*/



window.onload = function(){
  //lytter for regisreringsknapp, 'registrerBtn'
    getId("registrerBtn").onclick = registrerFun;
}
function registrerFun() {
  //henter de fire verdiene som er lagt til
  var inn1 = parseInt(getId("inn1").value);
  var inn2 = parseInt(getId("inn2").value);
  var inn3 = parseInt(getId("inn3").value);
  var inn4 = parseInt(getId("inn4").value);
  //legger de fire verdiene i array
  regVindstyrker = [inn1, inn2, inn3, inn4];

  //tømmer hentedeWatt fra tidligere registreringer
  hentedeWatt = [];
  for(i in regVindstyrker){
    //for hver index i regVindstyrker skal wattITime fra wattProduksjon-arrayet hentes ut
    for(x in wattProduksjon){
      //sjekker om vindstyrken i wattProduksjon[i] samsvarer med det brukeren har registrert.
      //i er løkke gjennom regVindstyrker og x kjøres FOR HVER i
      if(wattProduksjon[x].meterPerSekundMin <= regVindstyrker[i] && wattProduksjon[x].meterPerSekundMax >= regVindstyrker[i]){
        hentedeWatt.push(wattProduksjon[x].wattITimen);
      }
    }
  }
  /*Nå holder hentedeWatt watt produsert i hver av de fire periodene per time.
  For å omgjøre til produksjonen i et helt døgn, ganges hver av de 4 6timers-periodene
  med 6. 6*4=24, 24 timer = ett døgn*/
  var totalProduksjon = 0;
  for(i in hentedeWatt){
    //ganger hver hentedeWatt med fire og regner det om til total produksjon ved å legge dem sammen
    totalProduksjon += hentedeWatt[i] * 6;
  }
  printOut(totalProduksjon + " er total produksjon", "output"); //la til ekstern funksjon for å unngå visuell støy i koden

}
function printOut(x, feltId) {
  /*Parametere som gir tekst som skal skrives ut, id til taggen det skal legges
  til i. getId er hentet fra jsBiblio.js*/
  getId(feltId).innerHTML = x;
}
