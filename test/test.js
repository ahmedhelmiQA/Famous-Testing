///                            before  - after  - beforeEach  - afterEach
/*
before(function(){       // once time before run the all test  cases //
    console.log("Run the application locally"); 
    console.log("Run the server");
   
})
after(function(){                          // once time after run the all test caes //
    console.log("stop the application locally");
    console.log("stop the server");
})

beforeEach(function(){      // before each test case //
    console.log("open the website");
    console.log("click on login menu button");
    
})

afterEach(function(){             // after each test case //
    console.log("close the browser");
})
describe("login test cases",function(){
    
    it("should be able to login with valid email and password",function(){
        console.log("fill a correct emial address");
        console.log("fill a correct password");
        console.log("click on the login button");
        console.log("make sure that the user was logged in correctly");
        });
        
        
        it("should not be able to login with valid email and invalid password",function(){
            console.log("fill a correct emial address");
            console.log("fill invalid password");
            console.log("click on the login button");
            console.log("make sure that an error message will be displayed");
            });

    it.only("shoud not be able to login with invald email and vaild password",function(){
        console.log("fill invalid email address");
        console.log("fill a correct password");
        console.log("click on the login button");
        console.log("make sure that an error message will be displayed");
    })
})
*/


   
it("should be able to login with valid email and password",function(){
    console.log("fill a correct emial address");
    console.log("fill a correct password");
    console.log("click on the login button");
    console.log("make sure that the user was logged in correctly");
    });
    
    
    it("should not be able to login with valid email and invalid password",function(){
        console.log("fill a correct emial address");
        console.log("fill invalid password");
        console.log("click on the login button");
        console.log("make sure that an error message will be displayed");
        });

it.only("shoud not be able to login with invald email and vaild password",function(){
    console.log("fill invalid email address");
    console.log("fill a correct password");
    console.log("click on the login button");
    console.log("make sure that an error message will be displayed");
})


