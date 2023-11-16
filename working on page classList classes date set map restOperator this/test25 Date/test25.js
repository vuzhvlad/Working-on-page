'use strict';

const now = new Date(); // it has the date that we have now

console.log(now);


const date = new Date('2020-05-01'); // put date as a string

console.log(date);


const numDate = new Date(2020, 5, 1, 20); // with a numbers, months start with 0 nad it takes your time Netherlands(+2) so it will be 19hours

console.log(numDate);

console.log(now.getFullYear()); // method that gets year
console.log(now.getMonth()); // method that gets month
console.log(now.getDate()); // method that gets day(number in the month)
console.log(now.getDay()); // method that gets day by week

console.log(now.getUTCHours()); // method that gets hours by UTC(+0)
console.log(now.getHours()); // method that just gets hours

console.log(now.getTimezoneOffset()); // method that gets difference between your time zone and UTC in minutes

console.log(now.setHours(18));
console.log(now);

// For set you just have the same ones but you need to switch "get" with "set" an dit sets parameters

new Date.parse('2020-05-01'); // another way of putting date with method .parse()

let start = new Date();

for(let i = 0; i < 1000000; i++) {
    let some = i ** 3;
}

let end = new Date();

console.log(`Loop worked for ${end - start} mileseconds`); // example of calculating data