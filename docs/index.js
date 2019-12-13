var mnid = require('../src/index')

var mnidInput = document.getElementById('mnid')
var outputErrorMsg = document.getElementById('error-msg')
var outputNetwork = document.getElementById('output-network')
var outputAddress = document.getElementById('output-address')

mnidInput.onkeyup= function (e) {
  outputErrorMsg.innerHTML = ''
  outputNetwork.innerHTML = ''
  outputAddress.innerHTML = ''
  var mnidValue = e.target.value

  try {
    var result = mnid.decode(mnidValue)

    outputNetwork.innerHTML = '<b>Network</b>: ' + networkIdToName(result.network)
    outputAddress.innerHTML = '<b>Address</b>: ' + result.address
  } catch (e) {
    outputErrorMsg.innerHTML = 'Invalid MNID'
  }
}

function networkIdToName(networkId) {
  var networks = {
    '0x1': 'Mainnet',
    '0x4': 'Rinkeby'
  }

  var network = networks[networkId] || networkId

  return network
}
