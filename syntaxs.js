
//Comments are wriiten like this

//Variables are declared like this.
var person = {
   name : "Aravind",
   age : 23.0,
   DOB : "9-1",
   HeIs : "Awesome"
};

//Logging onto to console like this
console.log(person);

//Functions are declared using the function keyword
function addNumbers(a,b) { return a+b;};

console.log(addNumbers(3,2));

//A function without any return statements prints undefined

function undefinedFun() { };

console.log(undefinedFun());


//Functions can be assigned to variables as follows.

var printingPerson = function printAravind() {
    console.log(person);
};

printingPerson();

//Call printPerson after 5000 millisecond.
//It sets a timer and calls printing person after 5000 milliseconds
setTimeout(printingPerson,5000);

