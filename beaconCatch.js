const Bleacon = require("bleacon");

Bleacon.startScanning();
let beacon = Bleacon.on("discover", function (bleacon) {});

console.log(beacon);