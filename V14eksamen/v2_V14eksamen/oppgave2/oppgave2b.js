window.onload = function(){
  document.getElementById("promilleBtn").onclick = tegnGraf;
  document.getElementById("ulovligHastighetBtn").onclick = tegnGraf;
}
function tegnGraf(evt) {
  var grafpunkter = [];
  if(evt.target.id === "promilleBtn"){
    for(i in statistikk){
      grafpunkter.push(statistikk[i].promillekjoring);
    }
  }
  else if(evt.target.id === "ulovligHastighetBtn"){
    for(i in statistikk){
      grafpunkter.push(statistikk[i].ulovligHastighet);
    }
  }
  var ctx = document.getElementById("tegnefelt").getContext("2d");
  ctx.clearRect(0,0,300,250);
  var tellerX = 0;


  for(i in grafpunkter){
    //lager diver for hver av stolpene
    ctx.moveTo(tellerX, 300);
    ctx.lineTo(tellerX, grafpunkter[i]/50);
    ctx.lineTo(tellerX+(300/grafpunkter.length), grafpunkter[i]/50);
    ctx.lineTo(tellerX+(300/grafpunkter.length), 300);
    ctx.font = "10px Arial";
    ctx.fillText(statistikk[i].ar,tellerX,20)//vet at indeksene skal samsvare
    ctx.stroke();

    tellerX += 300/grafpunkter.length;
    console.log(tellerX);
  }
}
