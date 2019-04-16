const Bleacon = require("bleacon");

Bleacon.startScanning();
Bleacon.on("discover", function (bleacon) {

  console.log(bleacon.proximity);

  // immediateのときにエンドポイントに送信
  if (bleacon.proximity === 'immediate') {
    
  }

});