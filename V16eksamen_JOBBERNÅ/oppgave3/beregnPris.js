/*Her står koden for beregning av pris. Den hver gang brukeren endrer en konfigurajon,
samt når siden lastes inn. */

/*NOTAT OM PRISER:
  døgnpris per person er registrert i data.js
  +300 for hvert enkeltrom
*/
function beregnPris(feltId) {
  totalPris = 0 //nullstiller pris
  //sjekke hotellpris:
  var x = document.getElementById("bySelect").selectedIndex;
  var hotellerArr = data[x].hoteller;
  if(document.getElementById("tidSelect").value === "sommerhalvår"){
    for(i in hotellerArr){
      if(hotellerArr[i].navn === document.getElementById("hotellerSelect").value){
        //legg til pris og gang med antall dager
        var antallDager = document.getElementById("antallPersonerSelect").value
        var leggTil = hotellerArr[i].prisSommer * antallDager;
        //LEGG OGSÅ TIL TILLEGG FOR ENKELTROM 300

        totalPris += leggTil;
      }
    }
  }
  else if (document.getElementById("tidSelect").value === "vinterhalvår") {
    for(i in hotellerArr){
      if(hotellerArr[i].navn === document.getElementById("hotellerSelect").value){
        //legg til pris og gang med antall dager
        var antallDager = document.getElementById("antallPersonerSelect").value
        var leggTil = hotellerArr[i].prisVinter * antallDager;
        //LEGG OGSÅ TIL TILLEGG FOR ENKELTROM 300

        totalPris += leggTil;
      }
    }
  }




  //printe pris
  document.getElementById(feltId).innerHTML = totalPris;
}
