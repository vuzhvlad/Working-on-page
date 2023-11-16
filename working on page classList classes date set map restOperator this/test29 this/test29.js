'use strict';

function showThis() {
    console.log(this); 
};

showThis();

//1 normal function: this  = window, but if we have "use strict" = undefined

function showThis(a, b) {
    console.log(this); 
    function sum() {
        console.log(this);
        return a + b;
    }

    console.log(sum());
};

showThis(4, 5);

const object = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
    }
}
object.sum();

//2 If we use a method inside of the object, context will be this object

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log("hello " + this.name);
    }
};
let vlad = new User('Vlad', 18);

//3 this in constructors and classes is new example of object (line 42)

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);

}

const user = {
    name: 'John'
};

sayName.call(user, 'Vuzh'); // you can put a parametr of function inside of call
sayName.apply(user, ['Vuzh']); // how to connect function and object, it has got a context of that object to use its data

//the difference between them is in syntax 

function count(num) {
    return this * num;
};

const double = count.bind(2); // bind goes to "this"
console.log(double(3)); // and then you have to put num into double
console.log(double(13));


//4 Apply this by writing it (call, apply, bind)


//Practicing

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this); // we get this button in HTML, for a normal function
    this.style.backgroundColor = 'red'; // it wouldnt be possible to use this if it were an arrow function
});

//arrow function doesnt have a context (this doesnt work)

const obj = {
    num: 5,
    sayName: function() {
        const say = () => {
            console.log(this.num); // it has got num because it is arrow function, it wouldnt work with a normal one
        };

        say();
    }
};

obj.sayName(); // it gives us a parent function



const doble = a =>  a * 2; // the way how to use arrow function with one line but you dont need return, and you dont  need to use " () " for a

   