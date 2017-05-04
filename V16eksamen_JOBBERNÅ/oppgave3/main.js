window.onload = oppstart;

function oppstart() {
  //lage lister
  lagListeBy(data, "bySelect");
  lagListe(tider, "tidSelect");
  lagListe(tall, "antallDobbelSelect");
  lagListe(tall, "antallEnkelSelect");
  lagListe(tall, "antallDognSelect");
  lagListe(tall, "antallPersonerSelect");

  lagListeHotell(data, "hotellerSelect", "bySelect");
  document.getElementById("bySelect").onchange = function(){
    lagListeHotell(data, "hotellerSelect", "bySelect");
  }
  beregnPris("prisfelt");
  var selects = document.getElementsByClassName("selects");
  for(i in selects){
    selects[i].onchange = function(){
      beregnPris("prisfelt");
    }
  }
}
