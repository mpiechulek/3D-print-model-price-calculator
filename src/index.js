//jshint esversion:6
import { coLubie } from './js/app.js';
import './sass/main.scss';

// Scroll back button efect
const btn = document.querySelector('.scrollBtn');

window.addEventListener('scroll', () => {

    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

// When the user clicks on the button, scroll to the top of the document

btn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});