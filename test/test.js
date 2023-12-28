
before(function(){
    console.log("Run the application locally");
    console.log("Run the server");
    console.log("open the website");
    console.log("click on login menu button");
    console.log("fill a correct emial address");
})
after(function(){
    console.log("stop the application locally");
    console.log("stop the server");
})
describe("login test cases",function(){
    
    it("should be able to login with valid email and password",function(){
        console.log("fill a correct password");
        console.log("click on the login button");
        console.log("make sure that the user was logged in correctly");
        });
        
        
        it("should not be able to login with valid email and invalid password",function(){
            console.log("fill invalid password");
            console.log("click on the login button");
            console.log("make sure that an error message will be displayed");
            });
})


