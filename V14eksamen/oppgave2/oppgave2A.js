var statistikk = [];
statistikk[2002] = {promillekjoring: 9631, ulovligHastighet: 9863};
statistikk[2003] = {promillekjoring: 8593, ulovligHastighet: 12217};
statistikk[2004] = {promillekjoring: 8363, ulovligHastighet: 14920};
statistikk[2005] = {promillekjoring: 8128, ulovligHastighet: 14929};
statistikk[2006] = {promillekjoring: 8515, ulovligHastighet: 15425};
statistikk[2007] = {promillekjoring: 8534, ulovligHastighet: 18010};

window.onload = oppstart;

var storst;
var minst;

function oppstart() {
  document.getElementById("visBtn").onclick = visDifferanse;
}
function visDifferanse() {
  var ar1 = document.getElementById("ar1").value;
  var ar2 = document.getElementById("ar2").value;
  if (ar1 < ar2) {
    storst = ar2;
    minst = ar1;
  }
  else {
    storst = parseInt(ar1);
    minst = parseInt(ar2);
  }
  document.getElementById("tekstfelt").innerHTML = "Diffrenase: " + hentDifferanse();
  if (negativUtvikling()) {
    document.getElementById("tekstfelt2").innerHTML = "Negativ utvikling";
  }
  else {
    document.getElementById("tekstfelt2").innerHTML = "Positiv utvikling";
  }
}
function negativUtvikling(){
  return (hentDifferanse() < 0);
}
function hentDifferanse() {
  return (statistikk[storst].promillekjoring - statistikk[minst].promillekjoring);
}
