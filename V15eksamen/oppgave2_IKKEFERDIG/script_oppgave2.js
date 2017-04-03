window.onload = oppstart;
/* //erstatte med noe som jeg kan navigere med indekstall
var priser = {
  overnatting: {
    lang: 7800,
    kort: 3200,
  },
  attraksjoner: {
    kort: {
      saftpresse: 190,
      skattejakt: 95,
      elvelangsGlomma: 65,
      cruiseGlomma: 145,
      klatrepark: 195,
      pilegrimsveien: 60,
    },
    lang: {
      saftpresse: 190,
      spaserturOlavsleden: 150,
      omvisningRodHerregård: 95,
      turMedMs: 110,
      skattejakt: 95,
      elvelangsGlomma: 65,
      cruiseGlomma: 145,
      rammeverksted: 120,
      klatrepark: 195,
      pilegrimsveien: 60,
    },
  }
}
*/
var sum = 0;
const kortType = 3200;
const langType = 7800;

var priserLang = [190,150,95,110,95,65,145,120,195,60];
var navnLang = ["Saftpresse","Spasertur langs Olavsleden",
"Omvisning på Rød Herregård", "Tur med MS Strømfoss(Halden)",
"Skattejakt","Elvelangs Glomma", "Cruise på Glomma",
"Rammeverksted på Galleri Lund","Våler klatrepark","Pilegrimsveien"];

var priserKort = [190,95,65,145,195,60];
var navnKort = ["Saftpresse","Skattejakt","Elvelangs Glomma",
"Cruise på Glomma", "Våler klatrepark", "Pilegrimsveien"];

var langArr = [];//her ligger data under .navn og .pris
var kortArr = [];//gjennom lagArrays() i oppstart

//htmlelementer
var visTilbudBtn;


function oppstart() {
  lagArrays(kortArr, 6, navnKort, priserKort);
  lagArrays(langArr, 10, navnLang, priserLang);

  visTilbudBtn = document.getElementById("visTilbudBtn");
  visTilbudBtn.onclick = visTilbudFun;

}
function lagArrays(arr, listeLengde, arrNavn, arrPris) {
  for(i = 0; i < listeLengde; i++){
    arr.push({navn:arrNavn[i], pris:arrPris[i]});
  }
}
function visTilbudFun() {
  sum = 0;
  if(document.getElementById("typeInn").value === "kort"){
    document.getElementById("tilbudsListe").appendChild(lagSelect(kortArr));
    sum += kortType;
  }
  else if(document.getElementById("typeInn").value === "lang"){
    document.getElementById("tilbudsListe").appendChild(lagSelect(langArr));
    sum += langType;
  }
  else {
    alert("Hva er det du driver med?")
  }
  var valgtTilbud = document.getElementsByClassName("valgtTilbud");
  for(i = 0; i <= valgtTilbud.length; i++){
    valgtTilbud[i].onclick = tilbudValgtFun;
  }
}
function lagSelect(arr) {
  var nyListe = document.createElement("ul");
  for(i in arr){
    var nyElement = document.createElement("li");
    nyElement.className = "valgtTilbud"//id skal brukes til å kalle onlcick
    nyElement.value = arr[i].pris; //legger til pris på listelement som value
    //henter prisen sennere med evt.target.value
    nyElement.innerHTML = arr[i].navn + ", " + arr[i].pris + ",- NOK";
    nyListe.appendChild(nyElement);
  }
  return nyListe;
}
function tilbudValgtFun(evt){
  document.getElementById("tekstfelt").innerHTML = "Pris:" + sum;
  sum += evt.target.value;
  document.getElementById("tekstfelt").innerHTML = "Pris:" + sum;
}
