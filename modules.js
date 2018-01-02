
// This is the syntax for exporting functions and arguments, They must preced with a variable.
module.exports = {

favFood2: "Biriyani",

printHelloWorld: function printHelloWorld() {
  		 console.log("Hello World");
		}

};


function printHelloNortheastern() {
   console.log("Hello northeastern");
};

// This is another way of adding functions to modules
//However as the number of functions grows the above method is more preffered;
module.exports.printHelloNortheastern = printHelloNortheastern;

module.exports.favFood = "Icecream";

function dontExport() {
   console.log("Work still pending");
};


