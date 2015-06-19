"use strict";

var sphero = require("sphero");
var orb = sphero("COM4");
orb.connect(function() {
  orb.color("FF00FF");

  orb.getBluetoothInfo(function(err, data) {
    console.log("bluetooth info fetched");
    if (err) { console.error("err:", err); }
    console.log("data:", data);
  });
});
