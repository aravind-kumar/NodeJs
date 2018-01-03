var modules = require("./modules"); //Care must be taken to not include the file extenstion
var modules3 = require("./modules3");
// By importing modules3 we are in effect taking all the changes that are made in module where we are chaing the fav food.
// Hence the log would also print favFood as pizza rather than icecream
// This is because all the objects are refference by default and if want to new copies of the imported statement then we have to create an object factory
modules.printHelloWorld();
modules.printHelloNortheastern();

console.log("Main fav food is " + modules.favFood);


//If however we want modules to be returned as different object everytime we have to use object factories.
// Object factories are similar to module exports but they return an function object everytime they are called and we also 


modules3 = modules3();

console.log(modules3);
