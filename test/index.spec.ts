/* global describe it beforeEach */

import { expect } from "chai";

import ethParseUri from "../src/index";

// const uuidRegex = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi

const hexRegex = /^[0-9a-f]+$/gi;

const eip681URI =
  "ethereum:pay-0x89205a3a3b2a69de6dbf7f01ed13b2108b2c43e7/transfer?address=0x8e23ee67d1332ad560396262c48ffbb01f93d052&uint256=1";

const eip1328URI =
  "wc:8a5e5bdc-a0e4-4702-ba63-8f1a5655744f@1?bridge=https%3A%2F%2Fbridge.walletconnect.org&key=41791102999c339c844880b23950704cc43aa840f3739e365323cda4dfa89e7a";

describe("// ----------------- eth-parse-uri ----------------- //", () => {
  describe("parse eip681 uri", () => {
    let resultURI = null;

    beforeEach(() => {
      resultURI = ethParseUri(eip681URI);
    });

    it("result is an object", () => {
      expect(resultURI).to.be.a("object");
    });

    it("result includes protocol", () => {
      const protocol = resultURI.protocol;
      expect(protocol).to.exist;
    });

    it("result protocol is string", () => {
      const protocol = resultURI.protocol;
      expect(protocol).to.be.a("string");
    });

    it("result includes prefix", () => {
      const prefix = resultURI.prefix;
      expect(prefix).to.exist;
    });

    it("result prefix is string", () => {
      const prefix = resultURI.prefix;
      expect(prefix).to.be.a("string");
    });

    it("result includes targetAddress", () => {
      const targetAddress = resultURI.targetAddress;
      expect(targetAddress).to.exist;
    });

    it("result targetAddress is string", () => {
      const targetAddress = resultURI.targetAddress;
      expect(targetAddress).to.be.a("string");
    });

    // it('result targetAddress is ethereum address', () => {
    //   const targetAddress = resultURI.targetAddress
    //   const regexTest = addressRegex.test(targetAddress)
    //   expect(regexTest).to.be.true
    // })

    it("result includes functionName", () => {
      const functionName = resultURI.functionName;
      expect(functionName).to.exist;
    });

    it("result functionName is string", () => {
      const functionName = resultURI.functionName;
      expect(functionName).to.be.a("string");
    });
  });

  describe("parse eip1328 uri", () => {
    let resultURI = null;

    beforeEach(() => {
      resultURI = ethParseUri(eip1328URI);
    });

    it("result is an object", () => {
      expect(resultURI).to.be.a("object");
    });

    it("result includes protocol", () => {
      const protocol = resultURI.protocol;
      expect(protocol).to.exist;
    });

    it("result protocol is string", () => {
      const protocol = resultURI.protocol;
      expect(protocol).to.be.a("string");
    });

    it("result includes prefix", () => {
      const prefix = resultURI.prefix;
      expect(prefix).to.exist;
    });

    it("result prefix is string", () => {
      const prefix = resultURI.prefix;
      expect(prefix).to.be.a("string");
    });

    it("result includes topic", () => {
      const topic = resultURI.topic;
      expect(topic).to.exist;
    });

    it("result topic is string", () => {
      const topic = resultURI.topic;
      expect(topic).to.be.a("string");
    });

    // it('result topic is UUID', () => {
    //   const topic = resultURI.topic
    //   const regexTest = uuidRegex.test(topic)
    //   expect(regexTest).to.be.true
    // })

    it("result includes key", () => {
      const key = resultURI.key;
      expect(key).to.exist;
    });

    it("result key is hex", () => {
      const key = resultURI.key;
      expect(hexRegex.test(key)).to.be.true;
    });
  });
});
