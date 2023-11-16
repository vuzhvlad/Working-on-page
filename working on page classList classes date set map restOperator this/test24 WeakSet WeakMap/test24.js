'use strict';

let user = {name: 'Ivan'};

let map = new WeakMap();
map.set(user, 'data');

user = null;

console.log(map);

// WeakMap use collector of rubish and deletes this object but it wont work with a normal Map

// with WeakMap you can use only .set() .get() .has() .delete() nad you cant use "for of"

let cache = new WeakMap();

function cacheUser(user) {
    if(!cache.has(user)) { // if we still dont have this user
        cache.set(user, Date.now()); // we will set it with a date - now
    }

    return cache.get(user); // then we just get this user
}

let lena = {name: 'Elena'};
let alex = {name: 'Alex'};

cacheUser(lena);
cacheUser(alex);

lena = null; // lena left the chat

console.log(cache.has(lena)); // false
console.log(cache.has(alex)); // true



// Weak Set can do only .add() .has() .delete() and we cant use "for of" ".get()"


let messages = [
    {text: 'hi', from: 'John'},
    {text: 'wow', from: 'Damir'},
    {text: 'how are u', from: 'Trafim'},
    {text: 'bye', from: 'Vlad'}
];

let readMessages = new WeakSet(); // we created WeakSet

readMessages.add(messages[0]); // added those messages inside
// readMessages.add(messages[1]);

readMessages.add(messages[0]);

console.log(readMessages.has(messages[0])); // true it has this message inside of WeakSet

messages.shift();

console.log(readMessages.has(messages[0])); // false

// WeakSet and WeakMap control using of memory and delete it when object doesnt have it









