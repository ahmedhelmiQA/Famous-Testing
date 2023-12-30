//              by jest
const {expect} = require("@jest/globals");
const { expect } = require("chai");
const checkName = require("..//name");

describe("check name test case",function(){
    test.only("should returns USER ifnthe name contains @",function(){
        const expectedResult = "USER";
        const actulResult    = checkName("ahm@d");
        expect(actulResult).toEqual(expectedResult);
    })
})