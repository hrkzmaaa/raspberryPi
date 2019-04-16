const Bleacon = require('bleacon')
const axiosBase = require('axios')

Bleacon.startScanning()
Bleacon.on('discover', function(bleacon) {
  // immediateのときにエンドポイントに送信
  // immediate : 10cm以内
  // near : 1m以内
  // far : それ以上
  if (bleacon.proximity === 'immediate') {
    console.log(bleacon)
    sendBeaconInfo(bleacon)
  }
})

/**
 * ビーコン情報をAWS上に送信する
 * @param {*} bleacon ビーコンの情報（JSON）
 */
const sendBeaconInfo = async beacon => {
  const axios = axiosBase.create({
    baseURL: 'https://r2hw56el75.execute-api.ap-northeast-1.amazonaws.com/test', // APIGatewayのエンドポイント
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    },
    responseType: 'json'
  })

  await axios.put('/', beacon)
}
