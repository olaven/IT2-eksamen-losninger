window.onload = function() {
  document.getElementById("registrerBtn").onclick = function(){
    registrerFun();
    oppdaterListe();
  }
  oppdaterListe();
}

function registrerFun() {
  var ukeDato = new Date();
  var ukeInn = ukeDato.getWeek(); //getWeek ligger nederst i dette dokumentet
  var middagerInn = parseInt(document.getElementById("middagerInn").value);
  var barnInn = parseInt(document.getElementById("barnInn").value);
  var ungdomInn = parseInt(document.getElementById("ungdomInn").value);
  var voksneInn = parseInt(document.getElementById("voksneInn").value);

  bestillingstabell.push(
    {
      uke: ukeInn,
      antallMiddager: middagerInn,
      antallBarn: barnInn,
      antallUngdom: ungdomInn,
      antallVoksne: voksneInn,
    }
  );

  oppdaterListe();

}

function oppdaterListe() {
  //tømme dokumentet:
  document.getElementById("listeTable").innerHTML = "";
  //legger inn øverste rad før dynamisk info
  document.getElementById("listeTable").innerHTML = " \
  <tr><td>Uke</td><td>Antall middager</td><td>Antall barn</td>\
    <td>Antall ungdom</td><td>Antall voksne</td></tr>";
  //legger til resten av tabellen, med data fra bestillingstabell(data.js)
  for(i in bestillingstabell){
    //lage nye elementer
    var nyTr = document.createElement("tr");//en rad for hver bestilling

    var ukeTd = document.createElement("td");
    var antallMiddagerTd = document.createElement("td");
    var antallBarnTd = document.createElement("td");
    var antallUngdomTd = document.createElement("td");
    var antallVoksneTd = document.createElement("td");
    //gi elementene verdier fra bestillingstabell
    ukeTd.innerHTML = bestillingstabell[i].uke;
    antallMiddagerTd.innerHTML = bestillingstabell[i].antallMiddager;
    antallBarnTd.innerHTML = bestillingstabell[i].antallBarn;
    antallUngdomTd.innerHTML = bestillingstabell[i].antallUngdom;
    antallVoksneTd.innerHTML = bestillingstabell[i].antallVoksne;


    //legg til de forskjellige elementene i den nye raden
    nyTr.appendChild(ukeTd);
    nyTr.appendChild(antallMiddagerTd);
    nyTr.appendChild(antallBarnTd);
    nyTr.appendChild(antallUngdomTd);
    nyTr.appendChild(antallVoksneTd);
    //legg den nye raden til i tabellen
    document.getElementById("listeTable").appendChild(nyTr);
  }
}


//hentet fra: https://weeknumber.net/how-to/javascript
Date.prototype.getWeek = function() {
  var date = new Date(this.getTime());
   date.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  // January 4 is always in week 1.
  var week1 = new Date(date.getFullYear(), 0, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                        - 3 + (week1.getDay() + 6) % 7) / 7);
}
