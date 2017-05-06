/*Her står koden for beregning av pris. Den hver gang brukeren endrer en konfigurajon,
samt når siden lastes inn. */

/*NOTAT OM PRISER:
  døgnpris per person er registrert i data.js
  +300 for hvert enkeltrom
*/
function beregnPris(feltId) {
  const enkeltromTillegg = 300;
  const kulturplassPris = 700;
  totalPris = 0 //nullstiller pris
  //sjekke hotellpris:
  var x = document.getElementById("bySelect").selectedIndex;
  var hotellerArr = data[x].hoteller;
  if(document.getElementById("tidSelect").value === "sommerhalvår"){
    for(i in hotellerArr){
      if(hotellerArr[i].navn === document.getElementById("hotellerSelect").value){
        //legg til pris og gang med antall dager
        var antallDogn = document.getElementById("antallDognSelect").value;
        var leggTil = hotellerArr[i].prisSommer * antallDogn;
        //tillegg for enkeltrom
        leggTil += document.getElementById("antallEnkelSelect").value * enkeltromTillegg;
        //tillegg for kultur
        if(document.getElementById("kulturplassSelect").checked){
          leggTil += kulturplassPris;
        }
        totalPris += leggTil;
        var antallPersoner = document.getElementById("antallPersonerSelect").value;
        totalPris = totalPris * antallPersoner;
      }
    }
  }
  else if (document.getElementById("tidSelect").value === "vinterhalvår") {
    for(i in hotellerArr){
      if(hotellerArr[i].navn === document.getElementById("hotellerSelect").value){
        //legg til pris og gang med antall dager
        var antallDogn = document.getElementById("antallDognSelect").value;
        var leggTil = hotellerArr[i].prisVinter * antallDogn;
        //tillegg for enkeltrom
        leggTil += document.getElementById("antallEnkelSelect").value * enkeltromTillegg;
        //tillegg for kultur
        if(document.getElementById("kulturplassSelect").checked){
          leggTil += kulturplassPris;
        }
        totalPris += leggTil;
        var antallPersoner = document.getElementById("antallPersonerSelect").value;
        totalPris = totalPris * antallPersoner;
      }
    }
  }




  //printe pris
  document.getElementById(feltId).innerHTML = totalPris;
}
