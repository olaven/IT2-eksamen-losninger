function lagListeHotell(arr, selectId, getFrom) {
  //var indeks = tilsvarer byen som er valgt
  var indeks = document.getElementById(getFrom).selectedIndex;
  var hotellerFraBy = arr[indeks].hoteller;
  //fjerner tidligere hoteller
  document.getElementById(selectId).innerHTML = "";
  for(i in hotellerFraBy){
    var nyOp = document.createElement("option");

    nyOp.innerHTML = hotellerFraBy[i].navn;
    nyOp.value = hotellerFraBy[i].navn;

    document.getElementById(selectId).appendChild(nyOp);
  }
}
function lagListe(arr, selectId) {//forventer arr
  for(i in arr){
    var nyOp = document.createElement("option");
    nyOp.innerHTML = arr[i];
    nyOp.value = arr[i];
    document.getElementById(selectId).appendChild(nyOp);
  }
}
function lagListeBy(arr, selectId) {//forventer assosiativ array med .by for hver indeks
  for(i in arr){
    var nyOp = document.createElement("option");
    nyOp.innerHTML = arr[i].by;
    nyOp.value = arr[i].by;
    document.getElementById(selectId).appendChild(nyOp);
  }
}
