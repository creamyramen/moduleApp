import { squares } from './module.js';
import { circles } from './module2.js';

document.querySelectorAll('button')[0].addEventListener("click", function() {
    squares();
});

document.querySelectorAll('button')[1].addEventListener("click", function() {
    circles();
});