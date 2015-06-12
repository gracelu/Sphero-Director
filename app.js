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

  //orb.roll(180, 0);
});

orb.runL2Diags(function(err, data) {
  if (err) {
    console.log("error: ", err);
  } else {
    console.log("data:");
    console.log("  recVer:", data.recVer);
    console.log("  rxGood:", data.rxGood);
    console.log("  rxBadId:", data.rxBadId);
    console.log("  rxBadDlen:", data.rxBadDlen);
    console.log("  rxBadCID:", data.rxBadCID);
    console.log("  rxBadCheck:", data.rxBadCheck);
    console.log("  rxBufferOvr:", data.rxBufferOvr);
    console.log("  txMsg:", data.txMsg);
    console.log("  txBufferOvr:", data.txBufferOvr);
    console.log("  lastBootReason:", data.lastBootReason);
    console.log("  bootCounters:", data.bootCounters);
    console.log("  chargeCount:", data.chargeCount);
    console.log("  secondsSinceCharge:", data.secondsSinceCharge);
    console.log("  secondsOn:", data.secondsOn);
    console.log("  distancedRolled:", data.distancedRolled);
    console.log("  sensorFailures:", data.sensorFailures);
    console.log("  gyroAdjustCount:", data.gyroAdjustCount);
  }
}

//roll(speed, heading, [state], callback)