'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('.button');

const width = box.clientWidth; // the way how to get width by js
const height = box.clientHeight; // the smae for height

const widthOff = box.offsetWidth; // the way how to get width by js with padding
const heightOff = box.offsetHeight; // the smae for height

const widthScroll = box.scrollWidth; // the way how to get width by js with scrolling
const heightScroll = box.scrollHeight;

console.log(width, height);

btn.addEventListener('click', (event) => {
    box.style.height = box.scrollHeight + 'px'; //after the click we change css style of the box 
    console.log(box.scrollTop); // it shows how many pixels you have already read by scrolling down
});

console.log(box.getBoundingClientRect().top);


const style = window.getComputedStyle(box); // method that shows style that already are assigned 

console.log(style.display); // showing style display


console.log(document.documentElement.clientWidth); // width of whole page