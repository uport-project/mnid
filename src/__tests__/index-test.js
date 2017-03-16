import { encode, decode } from '../index'

describe('encode', () => {
  it('main-net', () => {
    expect(encode({
      network: '0x01',
      address: '0x00521965e7bd230323c423d96c657db5b79d099f'
    })).toEqual('QNJLTnSvaNyBVVQJuu6i1RWQykxgbXcVm')
  })

  it('with genesis hash', () => {
    expect(encode({
      network: '0x94365e3a',
      address: '0x00521965e7bd230323c423d96c657db5b79d099f'
    })).toEqual('2XR6JggKNT6rVxVXYdMbTYzL4r4FmZTM9fTyUNs')
  })

  it('ropsten', () => {
    expect(encode({
      network: '0x03',
      address: '0x00521965e7bd230323c423d96c657db5b79d099f'
    })).toEqual('2D3WJgP2LwJipMmaMkZjgFy5fzGr3zCvhB')
  })

  it('kovan', () => {
    expect(encode({
      network: '0x2a', 
      address: '0x00521965e7bd230323c423d96c657db5b79d099f'
    })).toEqual('HuE2hv1G2yNtiGCxK7ZAb9amDfKdr63mHg')
  })
})

describe('decode', () => {
  it('main-net', () => {
    expect(decode('QNJLTnSvaNyBVVQJuu6i1RWQykxgbXcVm')).toEqual(
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
    expect(decode('2XR6JggKNT6rVxVXYdMbTYzL4r4FmZTM9fTyUNs')).toEqual(
      {
        network: '0x94365e3a',
        address: '0x00521965e7bd230323c423d96c657db5b79d099f'
      }
    )
  })

  it('ropsten', () => {
    expect(decode('2D3WJgP2LwJipMmaMkZjgFy5fzGr3zCvhB')).toEqual(
      {
        network: '0x03',
        address: '0x00521965e7bd230323c423d96c657db5b79d099f'
      }
    )
  })

  it('kovan', () => {
    expect(decode('HuE2hv1G2yNtiGCxK7ZAb9amDfKdr63mHg')).toEqual(
      {
        network: '0x2a',
        address: '0x00521965e7bd230323c423d96c657db5b79d099f'
      }
    )
  })
})