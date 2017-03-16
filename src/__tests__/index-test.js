import { encode, decode } from '../index'

describe('encode', () => {
  it('main-net', () => {
    expect(encode({
      network: '0x01',
      address: '0x00521965e7bd230323c423d96c657db5b79d099f'
    })).toEqual('3FeXiAwmuLCF5ivArnhvmt3AMupZeFCT8LFum6g')
  })

  it('with genesis hash', () => {
    expect(encode({
      network: '0x94365e3a',
      address: '0x00521965e7bd230323c423d96c657db5b79d099f'
    })).toEqual('G3XAsDcGm2ApPvU2ujKDF5f7EVEtuSWTUn7PLAcvyHDU')
  })

  it('ropsten', () => {
    expect(encode({
      network: '0x03',
      address: '0x00521965e7bd230323c423d96c657db5b79d099f'
    })).toEqual('3FeoPVaGLrxyPkic7pLbPqSmjPxMmFSEHz2yfmt')
  })

  it('kovan', () => {
    expect(encode({
      network: '0x2a', 
      address: '0x00521965e7bd230323c423d96c657db5b79d099f'
    })).toEqual('3Fk57Fqpvi1CTMq6fsAaUxtATMaN7q4v1znTyku')
  })
})

describe('decode', () => {

  it('main-net', () => {
    expect(decode('3FeXiAwmuLCF5ivArnhvmt3AMupZeFCT8LFum6g')).toEqual(
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
    expect(decode('G3XAsDcGm2ApPvU2ujKDF5f7EVEtuSWTUn7PLAcvyHDU')).toEqual(
      {
        network: '0x94365e3a',
        address: '0x00521965e7bd230323c423d96c657db5b79d099f'
      }
    )
  })

  it('ropsten', () => {
    expect(decode('3FeoPVaGLrxyPkic7pLbPqSmjPxMmFSEHz2yfmt')).toEqual(
      {
        network: '0x03',
        address: '0x00521965e7bd230323c423d96c657db5b79d099f'
      }
    )
  })

  it('kovan', () => {
    expect(decode('3Fk57Fqpvi1CTMq6fsAaUxtATMaN7q4v1znTyku')).toEqual(
      {
        network: '0x2a',
        address: '0x00521965e7bd230323c423d96c657db5b79d099f'
      }
    )
  })
})