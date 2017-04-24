window.onload = oppstart;
var language = [];
language[0] = {name: "amerikansk",
q1: "'I am' or 'I is'", a1: "I am",
q2: "'They are' or 'They is'", a2: "They are",
q3: "'An apple' or 'A apple'", a3: "An apple"};

language[1] = {name: "norsk",
q1: "'Dem er' eller 'de er'?", a1: "De er",
q2: "'Simen løper' eller 'Simen løpa'", a2: "Simen løper",
q3: "'Hvilken bok' eller 'Hvem bok'", a3: "Hvilken bok"};
//language[1] = {name:"test"} //demonastrasjon av hvordan man kan legge til flere språk med spørsmål

var poeng = 0;

function oppstart() {
  lagListe(language, "sprakInn");

  document.getElementById("startBtn").onclick = startFun;

  setInterval(function(){
    document.getElementById("poengFelt").innerHTML = poeng;
  }, 400);
}
function startFun() {

  document.getElementById("sporsmalfelt").innerHTML = ""; //fjerner gamle for å unngå duplikater

  hentSporsmal();
}
function hentSporsmal() {

    var ix = sprakInn.selectedIndex;

    console.log(ix);

    var q1 = language[ix].q1;
    var q2 = language[ix].q2;
    var q3 = language[ix].q3;

    var a1 = language[ix].a1;
    var a2 = language[ix].a2;
    var a3 = language[ix].a3;

    var q1Felt = document.createElement("span");
    var q2Felt = document.createElement("span");
    var q3Felt = document.createElement("span");

    var a1Felt = document.createElement("input");
    var a2Felt = document.createElement("input");
    var a3Felt = document.createElement("input");

    a1Felt.id = "a1";
    a2Felt.id = "a2";
    a3Felt.id = "a3";

    q1Felt.innerHTML = "<br>" + language[ix].q1;
    document.getElementById("sporsmalfelt").appendChild(q1Felt);
    document.getElementById("sporsmalfelt").appendChild(a1Felt);

    q2Felt.innerHTML = "<br>" + language[ix].q2;
    document.getElementById("sporsmalfelt").appendChild(q2Felt);
    document.getElementById("sporsmalfelt").appendChild(a2Felt);

    q3Felt.innerHTML = "<br>" + language[ix].q3;
    document.getElementById("sporsmalfelt").appendChild(q3Felt);
    document.getElementById("sporsmalfelt").appendChild(a3Felt);

    document.getElementById("angiBtn").style.visibility = "visible";

    document.getElementById("angiBtn").onclick = function(){ //onclickhendelsen er plassert her for å ha tilgang til lokale variabler q1etc..
      if(a1 === a1Felt.value){
        poeng += 1;
      }
      else {
        poeng -= 1;
      }
      if(a2 === a2Felt.value){
        poeng += 1;
      }
      else {
        poeng -= 1;
      }
      if(a3 === a3Felt.value){
        poeng += 1;
      }
      else {
        poeng -= 1;
      }
      sjekkPoeng(poeng, "tilbakemelding");
    };
}
function sjekkPoeng(p, feltId){
  if (p >= 3) {
    document.getElementById(feltId).innerHTML = "Dette språket kan du særdeles godt!";
  }
  else if (p < 3 && p > 0) {
    document.getElementById(feltId).innerHTML = "Ganske godt resultat det her! Ønsker du bedre resultat, tilbys det kurs i New York!"
  }
  else if(p < 0) {
    document.getElementById(feltId).innerHTML = "Fortvil ikke! Det er alltid håp for de som ønsker å lære et nytt språk!"
  }

  document.getElementById("reload").style.visibility = "visible";
  document.getElementById("reload").onclick = function(){
    location.reload();
  }
}
function lagListe(arr, selectId) {
  for(i in arr){
    var nyOp = document.createElement("option");
    nyOp.value = arr[i].name;
    nyOp.innerHTML = arr[i].name;  
    document.getElementById(selectId).appendChild(nyOp);
  }
}
