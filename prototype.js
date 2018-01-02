function newUser() {
  this.name = "Aravind",
  this.age="24",
  this.score = 30;
  this.increaseScore = function increaseScore(otherUser) {
                           otherUser.score += 1;
                       }
};


var user1 = new newUser();
var user2 = new newUser();
user2.name = "Kumar";

user2.increaseScore(user1);

console.log(user1);
console.log(user2);


newUser.prototype.decreaseScore = function decreaseScore(otherUser) {
				   otherUser.score -= 1;
      				  }

user2.decreaseScore(user1);

console.log(user1);
console.log(user2);


newUser.prototype.favFood = "Icecream";

console.log(user1);
console.log(user2);

 
