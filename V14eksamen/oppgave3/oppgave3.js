var tabell = [];
tabell[2008] = {promille: 8560, hastighet: 15909};
tabell[2009] = {promille: 8146, hastighet: 14197};
tabell[2010] = {promille: 8241, hastighet: 13276};
tabell[2011] = {promille: 8019, hastighet: 11158};
tabell[2012] = {promille: 9759, hastighet: 12264};

window.onload = oppstart;

function oppstart() {
  var arInn = document.getElementById("arInn").value;
  var promilleInn = document.getElementById("promilleInn");
  var hastighetInn = document.getElementById("hastighetInn");


  document.getElementById("leggTilBtn").onclick = leggTilFun;
  document.getElementById("lobbruddBtn").onclick = lovbruddFun;
}
function lovbruddFun() {
  var tekstfelt = document.getElementById("tekstfelt");

  var lavest = tabell[2008].promille + tabell[2008].hastighet; 
  for(i in tabell){
    var sjekk = tabell[i].promille + tabell[i].hastighet;
    if (sjekk < lavest) {
      lavest = sjekk;
      var ar = i;
    }
  }
  tekstfelt.innerHTML = ar;
}
function leggTilFun() {
  arInn = parseInt(arInn.value);
  promilleInn = parseInt(promilleInn.value);
  hastighetInn = parseInt(hastighetInn.value);

  tabell[arInn].promille = promilleInn;
  tabell[arInn].hastighet = hastighetInn;
}
