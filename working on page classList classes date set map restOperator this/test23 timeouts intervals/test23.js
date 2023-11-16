'use strict';

const timerId = setTimeout(function() { // setTimeout sets timer for the function
    console.log('hello');
}, 2000); // mlseconds

const timerID = setTimeout(function(text) { // another syntax for it
    console.log(text);
}, 2000, 'hello');





function logger() {
    if(i === 3) {
        clearInterval(timer);// when it happened 3 times it will stop
    }
    console.log('text');
    i++;
};

const timerLogger = setTimeout(logger, 2000); // you can also call it like that

// clearInterval(timerLogger); // stops timer


const btn = document.querySelector('.btn');
let timer; // you should do it like that
let i = 0; // counter

// btn.addEventListener('click', () => {
//      timer = setInterval(logger, 2000); // every 2 seconds it will start this function
// });



let id = setTimeout(function log() { // example with recursion and callback function
    console.log('vlad'); // it does it and only after it
    id = setTimeout(log, 500); // it will start another timer
}, 500);



function myAnimation() {
    const elem = document.querySelector('.box'); // got a box 
    let pos = 0; // position

    const idSet = setInterval(frame, 10); // interval for animation frame and 100 mileseconds

    function frame() {
        if(pos == 300) { // when pos = 300 
            clearInterval(idSet); // we stop interval
        } else {
            pos++; // every time it starts pos + 1
            elem.style.top = pos + "px"; // and we move elem from top to bottom
            elem.style.left = pos + "px";  // and we move lement from left to right
        }
    };
};

btn.addEventListener('click', myAnimation); // then we just add lsitener and after click it start working 
    
