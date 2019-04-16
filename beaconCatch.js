const Bleacon = require('bleacon')

Bleacon.startScanning()
Bleacon.on('discover', function(bleacon) {
  // immediateのときにエンドポイントに送信
  if (bleacon.proximity === 'immediate') {
    console.log(bleacon)
    sendBeaconInfo()
  }
})

const sendBeaconInfo = async () => {
  const axios = axiosBase.create({
    baseURL: 'https://r2hw56el75.execute-api.ap-northeast-1.amazonaws.com/test', // APIGatewayのエンドポイント
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    },
    responseType: 'json'
  })

  await axios.put('/', bleacon)
}
