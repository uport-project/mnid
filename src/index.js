var BASE58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
var base58 = require('base-x')(BASE58)
import { sha3_256 } from 'js-sha3'
import { Buffer } from 'buffer'

function checksum (payload) {
  return new Buffer(sha3_256(Buffer.concat(payload)), 'hex').slice(0, 4)
}

export function encode ({network, address}) {
  const payload = [new Buffer(network.slice(2), 'hex'), new Buffer(address.slice(2), 'hex')]
  payload.push(checksum(payload))
  return base58.encode(Buffer.concat(payload))
}

export function decode (encoded) {
  const data = Buffer.from(base58.decode(encoded))
  const netLength = data.length - 24
  const network = data.slice(0, netLength)
  const address = data.slice(netLength, 20 + netLength)
  const check = data.slice(netLength + 20)
  if (check.equals(checksum([network, address]))) {
    return {
      network: `0x${network.toString('hex')}`,
      address: `0x${address.toString('hex')}`
    }
  } else {
    throw new Error('Invalid address checksum')
  }
}
