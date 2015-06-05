"use strict";

var sphero = require("sphero");
var orb = sphero("COM4");

orb.connect(function() {
  orb.streamOdometer();

  orb.on("odometer", function(data) {
    console.log("::STREAMING ODOMETER::");
    console.log("  data:", data);

    console.log("(x,y): ", data.x.value[0], data.y.value);


  });

  orb.roll(180, 0);
});

//roll

//calculate distance
