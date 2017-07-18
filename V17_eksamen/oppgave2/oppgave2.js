var wattProduksjon = [
  /*Å ha med .navn er ikke nødvendig for programmet, men det gjør det lettere å
  lese/forstå for meg og de som skal lese koden etter meg*/
  {
    navn: "Stille",
    meterPerSekundMin:0,
    meterPerSekundMax:0.2,
    wattITimen:0,
  },
  {
    navn: "Flau vind",
    meterPerSekundMin:0.3,
    meterPerSekundMax:1.5,
    wattITimen:0,
  },
  {
    navn: "Svak vind",
    meterPerSekundMin:1.6,
    meterPerSekundMax:3.3,
    wattITimen:2,
  },
  {
    navn: "lett bris",
    meterPerSekundMin:3.4,
    meterPerSekundMax:5.4,
    wattITimen:10,
  },
  {
    navn: "Laber bris",
    meterPerSekundMin:5.5,
    meterPerSekundMax:7.9,
    wattITimen:60,
  },
  {
    navn: "Frisk bris",
    meterPerSekundMin:8,
    meterPerSekundMax:10.7,
    wattITimen:150,
  },
  {
    navn: "Liten kuling",
    meterPerSekundMin:10.8,
    meterPerSekundMax:13.8,
    wattITimen:400,
  },
  {
    navn: "Stiv kuling",
    meterPerSekundMin:13.9,
    meterPerSekundMax:17.1,
    wattITimen:500,
  },
  { //skrur seg av pga. sikkerhet
    navn: "Sterk kuling",
    meterPerSekundMin:17.2,
    meterPerSekundMax:20.7,
    wattITimen:0,
  },
  {
    navn: "Liten storm",
    meterPerSekundMin:20.8,
    meterPerSekundMax:24.4,
    wattITimen:0,
  },
  {
    navn: "Full storm",
    meterPerSekundMin:24.5,
    meterPerSekundMax:28.4,
    wattITimen:0,
  },
  {
    navn: "Sterk storm",
    meterPerSekundMin:28.5,
    meterPerSekundMax:32.6,
    wattITimen:0,
  },
  {
    navn: "Orkan",
    meterPerSekundMin:32.7,
    meterPerSekundMax:999999999999999999,
    wattITimen:0,
  },
];



window.onload = function(){
  //lytter etter enter-knapp
  document.onkeydown = sjekkVindFun;
}
function sjekkVindFun(evt) {
  if(evt.keyCode === 13){//sjekker om brukeren har klikket på enter
    if(sjekkInput()){
      //input er int, slik som de er registrert i wattProduksjon
      var input = parseInt(getId("vindstyrkeInn").value);
      /*input toFixed(1) gir meg alltid x.0 (x.00 for toFixed(2)),
      ikke x.y, som jeg hadde forventet. Det er sentralt å regne med
      like mange desimaler som i dataene i og med at det gjøres hopp
      fra f.eks 28.4-28.5 mellom 'full'- og 'sterk storm'.
      Der som jeg hadde hatt mer tid til rådighet/skulle lage programmet
      for en kunde ville jeg ha feilsøket dette videre*/

      //løkke gjennom wattProduksjon for å se hvor #vindstyrkeInn.value passer
      for(i in wattProduksjon){
        if(wattProduksjon[i].meterPerSekundMin <= input && wattProduksjon[i].meterPerSekundMax >= input){
          //print output til bruker
          getId("output").innerHTML = "Omtrent " + wattProduksjon[i].wattITimen + "\
          watt i timen produseres ved denne vindstyrken.";
          //legge til info om fargen er utenfor vindmømllens opereringsområde
          if(wattProduksjon[i].wattITimen === 0){
            getId("output").innerHTML += "<br><br>Dette er fordi vindmøllen ikke \
            operer ved denne hastigheten";
          }
        }
      }
    }
    else {
      getId("vindstyrkeInn").style.borderColor = "rgb(191, 19, 66)";
      setTimeout(function(){
        getId("vindstyrkeInn").style.borderColor = "inherit";
      }, 500);
      /*effekt skal bare vises så lenge at bruker oppfatter, den skal ikke komme
      i veien utover det. Dette er slik at brukeropplevelsen ikke skal ødelegges*/
    }
  }
}
function sjekkInput() {
  var input = getId("vindstyrkeInn").value;//getId hentet fra jsBiblio.js
  //ønsker at input skal være et tall
  if (input == "" || input < 0 || input == NaN) {
    return false;
  }
  else {
    return true;
  }
}
