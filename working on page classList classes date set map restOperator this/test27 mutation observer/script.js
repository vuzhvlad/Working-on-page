'use strict';

const box = document.querySelector('.box');

let observer = new MutationObserver(MutationRecords => { // creatation of observer
    console.log(MutationRecords);
}); 

observer.observe(box, { // method observe
    childList: true
});

observer.disconnect(); // to remove it

// mutation oberver that observe after object