# Extendible Address Encoding

** WIP **

This is just experimental. There will likely be many changes, if indeed we want use this.

Ethereum and uPort is headed into a multi-chain world. As end users are are interacting more and more with Ethereum and multiple chains the risk of monetary loss of users/servers inadvertently transferring value from an address on network X to an address of Y is growing higher and higher.

The Bitcoin protocol uses [Base58Check encoding](https://en.bitcoin.it/wiki/Base58Check_encoding) to prevent this, but the ethereum ecosystem has used a raw hex version of the address instead.

## Extendible Encoding

The proposal is inspired by the Base58Check encoding but uses Ethereums [RLP](https://github.com/ethereum/wiki/wiki/RLP) encoding scheme, which makes it easier to create a simple yet future proof scheme. 

The following items could be encoded:

* network id or four bytes of genesis block hash (or both)
* actual address data
* Four bytes (32 bits) of SHA256-based error checking code (digest of the version and payload)

Then use base58 encoding of the end result. The end result is fairly complete but still extendible in the future. We could start using simply the network id and replace it with with genesis block hash and other meta data in the future.

### Benefits

This works with ethereum based blockchains, but can easily be extended to use other blockchains or even non blockchain identifiers in the future. It would also be straightforward to add further details specifying which fork etc.

### Ease of Implementation

This can be implemented very easily with few dependencies. It would be trivial to use this to add multichain support to uport-lite for example. Thus even allowing (if we want it) the interchange of JWT's verified on different networks.

### Examples

- hex: `0x00521965e7bd230323c423d96c657db5b79d099f`
- main-net: `3FeXiAwmuLCF5ivArnhvmt3AMupZeFCT8LFum6g`
- ropsten: `3FeoPVaGLrxyPkic7pLbPqSmjPxMmFSEHz2yfmt`

## Previous Work

### Base58Check Encoding

Bitcoin's encoding consists of the following 3 items:

* Version prefix - Used more as a type and network field. See [list](https://en.bitcoin.it/wiki/List_of_address_prefixes).
* Payload (eg. hash of public key)
* Four bytes (32 bits) of SHA256-based error checking code (digest of the version and payload)

The whole thing is base58 encoded for compactness and URL safety.

The version prefix allows humans to visually recognize the address type from the first couple of characters. The error checking code ensures that there aren't any obvious errors in hte address

### EIP77 

A previous attempt at solving this for ethereum is found in [EIP 77](https://github.com/ethereum/EIPs/issues/77) which is similar to Base58Check:

* 1 flag byte - currently undefined. I suppose this could be used to pick a chain. But 1 byte does not seem enough
* Payload (eg. hash of public key)
* Four bytes (32 bits) of SHA256-based error checking code (digest of the version and payload)
