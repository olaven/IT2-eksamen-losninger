window.onload = function(){
  document.onkeydown = function(evt){
    //hente årene fra input
    var ar1 = document.getElementById("ar1");
    var ar2 = document.getElementById("ar2");
    if (evt.keyCode == 13) {
      visStatistikk(ar1, ar2);
    }
  }
}
function visStatistikk(fraAr, tilAr) {//mottar html-tagger
  fraAr = parseInt(fraAr.value);
  tilAr = parseInt(tilAr.value);

  //sjekke om årene er innenfor
  if(fraAr > statistikk[statistikk.length-1].ar || fraAr < statistikk[0].ar){
    alert("Statistikk mellom" + statistikk[statistikk.length-1].ar + "og" + statistikk[0].ar )
    return;
  }
  if(tilAr > statistikk[statistikk.length-1].ar || tilAr < statistikk[0].ar){
    alert("Statistikk mellom" + statistikk[statistikk.length-1].ar + "og" + statistikk[0].ar )
    return;
  }

  var storst;//disse holder det største
  var minst;//og minste året per nå, får statistikktall senere
  if(fraAr < tilAr){
    storst = tilAr;
    minst = fraAr;
  }
  else {
    storst = fraAr;
    minst = tilAr;
  }

  for(i in statistikk){//NOTE: her holder storst og minst statistikktall!
    if (statistikk[i].ar === storst) {
      storst = statistikk[i].promillekjoring;
    }
    if(statistikk[i].ar === minst){
      minst = statistikk[i].promillekjoring;
    }

    var resultat = storst - minst;

    document.getElementById("tallfelt").innerHTML = resultat;

    var info; //skal holde teksttilbakemelding
    if (resultat<0) {
      info = "negativ utvikling";
    }
    else {
      info = "positiv utvikling";
    }
    document.getElementById("tekstfelt").innerHTML = info;


  }

}
