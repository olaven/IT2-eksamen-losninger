window.onload = oppstart;

var land = ["St. Petersburg", "Amsterdam", "New York", "Roma"];
var tid = ["Vinterhalvår", "Sommerhalvår"];
var type = ["Enkeltrom", "Dobbeltrom"];

var pris = 0;

var hoteller = [];
hoteller.push({navn: "Aurora", prisSommer: 590, prisVinter: 690});
hoteller.push({navn: "Downtown", prisSommer: 660, prisVinter: 750});
hoteller.push({navn: "City Hall", prisSommer: 450, prisVinter: 530});
hoteller.push({navn: "Wilmont", prisSommer: 660, prisVinter: 880});
hoteller.push({navn: "Chelsea Inn", prisSommer: 450, prisVinter: 560});
hoteller.push({navn: "Fairfly ouse", prisSommer: 670, prisVinter: 770});
hoteller.push({navn: "Baskers' street", prisSommer: 500, prisVinter: 610});
hoteller.push({navn: "Browns' quarter", prisSommer: 450, prisVinter: 560});
hoteller.push({navn: "The Box House", prisSommer: 430, prisVinter: 560});
hoteller.push({navn: "Queens hotel", prisSommer: 510, prisVinter: 630});
hoteller.push({navn: "Palace", prisSommer: 800, prisVinter: 970});
hoteller.push({navn: "The new street hotel", prisSommer: 450, prisVinter: 670});
hoteller.push({navn: "Imperial", prisSommer: 1200, prisVinter: 1450});
hoteller.push({navn: "Marriot", prisSommer: 1100, prisVinter: 1300});
hoteller.push({navn: "The London", prisSommer: 780, prisVinter: 890});
hoteller.push({navn: "Wharf’s Hotel", prisSommer: 350, prisVinter: 550});
hoteller.push({navn: "Locker inn", prisSommer: 560, prisVinter: 710});

function oppstart() {
  lagListe(land, "landInn");
  lagListe(tid, "tidInn");
  lagListeObj(hoteller, "hotellInn", "navn")
  lagListe(type, "typeInn");
  lagListeTall(0, 25, "antallInn");

  //sjekk etter prisendringer:
  setInterval(function(){
      //legg til hotellPris
  }, 1000)

}
function lagListeTall(min, max, selectId) {
  for(i = min; i <= max; i ++){
    var nyOp = document.createElement("option");
    nyOp.value = i;
    nyOp.innerHTML = i;
    document.getElementById(selectId).appendChild(nyOp);
  }
}
function lagListeObj(arr, selectId/*, navn*/) {
  for(i in arr){
    var nyOp = document.createElement("option");
    /*
    nyOp.value = arr[i].location;
    nyOp.innerHTML = arr[i].location;
    //gjør koden mer generell og gjenbrukbar, men støter på problemer fordi "navn"/"'navn'" tolkes som udefinerte variabler eller en string
    */
    nyOp.value = arr[i].navn;
    nyOp.innerHTML = arr[i].navn;
    document.getElementById(selectId).appendChild(nyOp);
  }
}
function lagListe(arr, selectId) {
  for(i in arr){
    var nyOp = document.createElement("option");
    nyOp.value = arr[i];
    nyOp.innerHTML = arr[i];
    document.getElementById(selectId).appendChild(nyOp);
  }
}
