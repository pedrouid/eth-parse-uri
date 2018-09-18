/* global describe it beforeEach Buffer */

import { expect } from 'chai'

import ethParseUri from '../src/index'

function testEncoding(testString, encoding) {
  const buffer = Buffer.from(testString, encoding)
  const result = buffer.toString(encoding)
  return result === testString
}

// const uuidRegex = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi
//
// const addressRegex = /^(0x)?[0-9a-f]{40}$/i

const eip681URI =
  'ethereum:pay-0x89205a3a3b2a69de6dbf7f01ed13b2108b2c43e7/transfer?address=0x8e23ee67d1332ad560396262c48ffbb01f93d052&uint256=1'

const eip1328URI =
  'ethereum:wc-8a5e5bdc-a0e4-4702-ba63-8f1a5655744f@1?name=DappExample&bridge=https://bridge.example.com&symKey=KzpSTk1pezg5eTJRNmhWJmoxdFo6UDk2WlhaOyQ5N0U='

describe('// ----------------- eth-parse-uri ----------------- //', () => {
  describe('parse eip681 uri', () => {
    let resultURI = null

    beforeEach(() => {
      resultURI = ethParseUri(eip681URI)
    })

    it('result is an object', () => {
      expect(resultURI).to.be.a('object')
    })

    it('result includes protocol', () => {
      const protocol = resultURI.protocol
      expect(protocol).to.exist
    })

    it('result protocol is string', () => {
      const protocol = resultURI.protocol
      expect(protocol).to.be.a('string')
    })

    it('result includes prefix', () => {
      const prefix = resultURI.prefix
      expect(prefix).to.exist
    })

    it('result prefix is string', () => {
      const prefix = resultURI.prefix
      expect(prefix).to.be.a('string')
    })

    it('result includes targetAddress', () => {
      const targetAddress = resultURI.targetAddress
      expect(targetAddress).to.exist
    })

    it('result targetAddress is string', () => {
      const targetAddress = resultURI.targetAddress
      expect(targetAddress).to.be.a('string')
    })

    // it('result targetAddress is ethereum address', () => {
    //   const targetAddress = resultURI.targetAddress
    //   const regexTest = addressRegex.test(targetAddress)
    //   expect(regexTest).to.be.true
    // })

    it('result includes functionName', () => {
      const functionName = resultURI.functionName
      expect(functionName).to.exist
    })

    it('result functionName is string', () => {
      const functionName = resultURI.functionName
      expect(functionName).to.be.a('string')
    })
  })

  describe('parse eip1328 uri', () => {
    let resultURI = null

    beforeEach(() => {
      resultURI = ethParseUri(eip1328URI)
    })

    it('result is an object', () => {
      expect(resultURI).to.be.a('object')
    })

    it('result includes protocol', () => {
      const protocol = resultURI.protocol
      expect(protocol).to.exist
    })

    it('result protocol is string', () => {
      const protocol = resultURI.protocol
      expect(protocol).to.be.a('string')
    })

    it('result includes prefix', () => {
      const prefix = resultURI.prefix
      expect(prefix).to.exist
    })

    it('result prefix is string', () => {
      const prefix = resultURI.prefix
      expect(prefix).to.be.a('string')
    })

    it('result includes sessionId', () => {
      const sessionId = resultURI.sessionId
      expect(sessionId).to.exist
    })

    it('result sessionId is string', () => {
      const sessionId = resultURI.sessionId
      expect(sessionId).to.be.a('string')
    })

    // it('result sessionId is UUID', () => {
    //   const sessionId = resultURI.sessionId
    //   const regexTest = uuidRegex.test(sessionId)
    //   expect(regexTest).to.be.true
    // })

    it('result includes name', () => {
      const name = resultURI.name
      expect(name).to.exist
    })

    it('result name is string', () => {
      const name = resultURI.name
      expect(name).to.be.a('string')
    })

    it('result includes symKey', () => {
      const symKey = resultURI.symKey
      expect(symKey).to.exist
    })

    it('result symKey is base64', () => {
      const symKey = resultURI.symKey
      const result = testEncoding(symKey, 'base64')
      expect(result).to.exist
    })
  })
})
