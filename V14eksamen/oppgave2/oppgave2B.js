
var statistikk = [];
statistikk[2002] = {promillekjoring: 9631, ulovligHastighet: 9863};
statistikk[2003] = {promillekjoring: 8593, ulovligHastighet: 12217};
statistikk[2004] = {promillekjoring: 8363, ulovligHastighet: 14920};
statistikk[2005] = {promillekjoring: 8128, ulovligHastighet: 14929};
statistikk[2006] = {promillekjoring: 8515, ulovligHastighet: 15425};
statistikk[2007] = {promillekjoring: 8534, ulovligHastighet: 18010};

var grafPunkter = [];

window.onload = oppstart;

function oppstart() {
  document.getElementById("promilleBtn").onclick = lagGraf;
  document.getElementById("hastighetBtn").onclick = lagGraf;
}
function lagGraf(evt) {
  for(i in statistikk){
    if(evt.target.id == "promilleBtn"){
      grafPunkter.push({data: statistikk[i].promillekjoring, navn: i});//grafPunkter blir et objekt med .data og .navn
      console.log("promillekjoring");
    }
    else if (evt.target.id == "hastighetBtn") {
      grafPunkter.push({data: statistikk[i].ulovligHastighet, navn: i});//grafPunkter blir et objekt med .data og .navn
      console.log("hastighet");

    }
    else {
      alert("ukjent feil");
    }

    //visualisering av grafer:
    var posX = 0;
    var grafBredde= 50;
    for(i in grafPunkter){
      var ctx = document.getElementById("omrade").getContext("2d");
      ctx.moveTo(posX,200);
      ctx.lineTo(posX, (grafPunkter[i].data) / 150);
      ctx.fillText(grafPunkter[i].navn, posX, 0);

      ctx.stroke();


      posX += 50;
    }
  }

  grafPunkter = [];
}
