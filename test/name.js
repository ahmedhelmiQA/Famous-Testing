// const checkName = require("..//name");

// describe("check name test case",function(){
//     it("should returns USER ifnthe name contains @",function(){
//         let result = checkName("ahm@d");
//         console.log(result);
//     })
// })


//       // assert
const { assert } = require("chai");
const checkName = require("../name");


describe("check name test case",function(){
    it.only("should returns USER if the name contains @",function(){
        let expectedresult = "USER";
        let actualresult = checkName("ahm@d");
        assert.equal(actualresult,expectedresult);
    })
})
