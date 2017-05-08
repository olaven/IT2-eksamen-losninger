var middagtyper = [];
middagtyper[0] = "Sørlandsk krabbesuppe";
middagtyper[1] = "Mandalstorsk i smørsaus med Holumspoteter ";
middagtyper[2] = "Laks fra Laudal i spinat"//kun dersom middager==3

var ravarer = [ //gram per persjon, for forskjellige grupper
  antallBarn = {
    torsk: 200,
    sei: 200,
    makrel: 200,
    reker: 250,
    krabbe: 300,
    laks: 200,
  },
  antallUngdom = {
    torsk: 300,
    sei: 300,
    makrel: 300,
    reker: 500,
    krabbe: 500,
    laks: 300,
  },
  antallVoksne = {
    torsk: 350,
    sei: 350,
    makrel: 350,
    reker: 500,
    krabbe: 600,
    laks: 350,
  }
];

var bestillingstabell = [
  {
    uke: 26,
    antallMiddager: 2,
    antallBarn: 1,
    antallUngdom: 1,
    antallVoksne: 2,
  },
  {
    uke: 26,
    antallMiddager: 3,
    antallBarn: 0,
    antallUngdom: 2,
    antallVoksne: 2,
  },{
    uke: 26,
    antallMiddager: 2,
    antallBarn: 0,
    antallUngdom: 0,
    antallVoksne: 1,
  },{
    uke: 26,
    antallMiddager: 3,
    antallBarn: 0,
    antallUngdom: 0,
    antallVoksne: 2,
  },{
    uke: 26,
    antallMiddager: 2,
    antallBarn: 3,
    antallUngdom: 0,
    antallVoksne: 2,
  },{
    uke: 27,
    antallMiddager: 2,
    antallBarn: 1,
    antallUngdom: 1,
    antallVoksne: 2,
  },{
    uke: 27,
    antallMiddager: 2,
    antallBarn: 1,
    antallUngdom: 1,
    antallVoksne: 2,
  },
];
