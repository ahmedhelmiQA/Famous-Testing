const checkName = require("..//name");

describe("check name test case",function(){
    it("should returns USER ifnthe name contains @",function(){
        let result = checkName("ahm@d");
        console.log(result);
    })
})
