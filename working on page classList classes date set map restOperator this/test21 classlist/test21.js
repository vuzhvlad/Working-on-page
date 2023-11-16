'use strict';


const btns = document.querySelectorAll('button');

console.log(btns[0].classList.length); // shows how many classes this elemnet has

console.log(btns[0].classList.item(0)); // gets a class with index 0

console.log(btns[0].classList.add('red', 'white')); // method .add() adds a new class name to element

console.log(btns[0].classList.remove('blue')); // method .remove() removes a class that you chose from the element 

console.log(btns[0].classList.toggle('blue', 'white')); // method .toggle() adds class if element doesnt have it and if it does have it, it will remove it from the element


if(btns[1].classList.contains('red')) { // method .contains() returns true or false depending on if class exists
    console.log('red'); // and if it exsts it will do something
} 


//adding class to element by pressing button
btns[0].addEventListener('click', () => { // when we click on first button
    if(!btns[1].classList.contains('red')) { // it checks if it has class 'red'
        btns[1].classList.add('red'); // if it doesnt have it we add class 'red' to it
    } else {
        btns[1].classList.remove('red'); // if it doest we remove this class from there
    }
});


// btns[0].addEventListener('click', () => { 
//     btns[1].classList.toggle('red'); // the same functionality with .toggle()
// });



const wrapper = document.querySelector('.btn-block');

// wrapper.addEventListener('click', (event) => { // we add event listener to whole div of boxes
//     if(event.target && event.target.tagName == "BUTTON") { // then we check if we press on this div by event.target and then if we press on BUTTON
//         console.log('Hello');
//     }
// });

// wrapper.addEventListener('click', (event) => { // we add listener to he whole div of boxes
//     if(event.target && event.target.classList.contains('blue')) { // we check if we press on this div and we press on the button that has class blue
//         console.log('Hello');
//     }
// });

wrapper.addEventListener('click', (event) => { // we add listener to he whole div of boxes
    if(event.target && event.target.matches("button.red")) { // we check if we press on this div and we press on the button that has class red
        console.log('Hello');
    }
});

const btn = document.createElement('button'); // creating element btn
btn.classList.add('red'); // adding clas to this button
wrapper.append(btn); // because this button exists only in js we have to use wrapper and put in the end of this div

// btns.forEach((btn) => { // doesnt work on button that we jsut made 'btn'
//     btn.addEventListener('click', () => { 
//         console.log('Hello');
//     });
// });