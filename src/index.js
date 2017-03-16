var BASE58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
var base58 = require('base-x')(BASE58)
import RLP from 'rlp'
import { sha3_256 } from 'js-sha3'
import { Buffer } from 'buffer'

function checksum (payload) {
  return new Buffer(sha3_256(RLP.encode(payload)), 'hex').slice(0, 4)
}

export function encode ({network, address}) {
  const payload = [new Buffer(network.slice(2), 'hex'), new Buffer(address.slice(2), 'hex')]
  payload.push(checksum(payload))
  return base58.encode(RLP.encode(payload))
}

export function decode (address) {
  const payload = RLP.decode(Buffer.from(base58.decode(address)))
  const check = payload.pop()
  if (check.equals(checksum(payload))) {
    return {
      network: `0x${payload[0].toString('hex')}`,
      address: `0x${payload[1].toString('hex')}`
    }
  } else {
    throw new Error('Invalid address checksum')
  }
}
