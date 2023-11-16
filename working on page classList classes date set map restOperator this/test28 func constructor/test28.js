'use strict';

const num = new Number(3); // give you number with value 3
console.log(num);

function User(name, id) { // function constructor to create new users
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`hello i am ${this.name}!`); // functions for object
    };

};

User.prototype.exit = function() {
    console.log(`User ${this.name} left`); // the way how to create method for function constructor 
};

const vlad = new User('Vlad', 18); // creating new user
const trafim = new User('Trafim', 18);

vlad.exit();

console.log(vlad, trafim); // created two objects with own properties and one common for both is "human"

vlad.hello(); // calling them
trafim.hello();

vlad.exit();


