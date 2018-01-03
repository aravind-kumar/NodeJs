var modules = require("./modules");

modules.favFood = "Pizza";

console.log("My fav food is " + modules.favFood);

module.exports = function() {
   return {
      name: "Aravind",
      lastName: "Kumar"
   }

};
