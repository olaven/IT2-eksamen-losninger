window.onload = oppstart;

function oppstart() {
  document.getElementById("stpetersburgDiv").onclick = stpetersburgFun;
  document.getElementById("wtcDiv").onclick = wtcFun;
  document.getElementById("romaDiv").onclick = romaFun;

  var ramme = document.getElementById("ramme");
}

function stpetersburgFun(evt) {
  ramme.innerHTML = "<img src='stPetersburg.jpg'> "
}
function wtcFun() {
  wtcApp.style.visibility = "visible";
  document.onkeydown = function(evt){
    if (evt.keyCode == "13") {
      var byInn = document.getElementById("byInn").value;
      if(byInn.toUpperCase() === "WTC" || byInn.toUpperCase() === "WORLD TRADE CENTER"){
        document.getElementById("wtcAppFelt").innerHTML = "Helt riktig! Dra til NYC og lær mer!"
      }
      else {
        document.getElementById("wtcAppFelt").innerHTML = "Desverre ikke helt riktig.. - kanskje du kan dra til NYC for å lære?"
      }
    }
    //lukking
    if(evt.keyCode == "27"){
      console.log("test");
      wtcApp.style.visibility = "hidden";
    }
  }
}
function romaFun(evt) {
  ramme.innerHTML = "<video src='romaVid.mp4' controls>"
}
