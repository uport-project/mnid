import { encode, decode } from '../index'

describe('encode', () => {
  it('main-net', () => {
    expect(encode({
      network: '0x01',
      address: '0x00521965e7bd230323c423d96c657db5b79d099f'
    })).toEqual('2nQtiQG6Cgm1GYTBaaKAgr76uY7iSexUkqX')
  })

  it('with genesis hash', () => {
    expect(encode({
      network: '0x94365e3a',
      address: '0x00521965e7bd230323c423d96c657db5b79d099f'
    })).toEqual('5A8bRWU3F7j3REx3vkJWxdjQPp4tqmxFPmab1Tr')
  })

  it('ropsten', () => {
    expect(encode({
      network: '0x03',
      address: '0x00521965e7bd230323c423d96c657db5b79d099f'
    })).toEqual('2oDZvNUgn77w2BKTkd9qKpMeUo8EL94QL5V')
  })

  it('kovan', () => {
    expect(encode({
      network: '0x2a', 
      address: '0x00521965e7bd230323c423d96c657db5b79d099f'
    })).toEqual('34ukSmiK1oA1C5Du8aWpkjFGALoH7nsHeDX')
  })
})

describe('decode', () => {
  it('main-net', () => {
    expect(decode('2nQtiQG6Cgm1GYTBaaKAgr76uY7iSexUkqX')).toEqual(
      {
        network: '0x01',
        address: '0x00521965e7bd230323c423d96c657db5b79d099f'
      }
    )
  })

  it('bad checksum', () => {
    expect(() => {
      decode('3FeXiAwmuLCe5ivArnhvmt3AMupZeFCT8LFum6g')
    }).toThrow('Invalid address checksum')
  })

  it('with genesis hash', () => {
    expect(decode('5A8bRWU3F7j3REx3vkJWxdjQPp4tqmxFPmab1Tr')).toEqual(
      {
        network: '0x94365e3a',
        address: '0x00521965e7bd230323c423d96c657db5b79d099f'
      }
    )
  })

  it('ropsten', () => {
    expect(decode('2oDZvNUgn77w2BKTkd9qKpMeUo8EL94QL5V')).toEqual(
      {
        network: '0x03',
        address: '0x00521965e7bd230323c423d96c657db5b79d099f'
      }
    )
  })

  it('kovan', () => {
    expect(decode('34ukSmiK1oA1C5Du8aWpkjFGALoH7nsHeDX')).toEqual(
      {
        network: '0x2a',
        address: '0x00521965e7bd230323c423d96c657db5b79d099f'
      }
    )
  })
})