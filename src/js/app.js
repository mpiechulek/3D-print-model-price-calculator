//jshint esversion:6
import { totalPrintCost } from './app/function.js';


export const action = () => {

    document.querySelector('.btn_reset').addEventListener('click', function() {
        document.getElementById('result').innerHTML = '000';
        document.querySelector('.warning_par').innerHTML = '';
    });

    document.querySelector('.btn_submit').addEventListener('click', function() {

        if (isNaN(totalPrintCost)) {
            document.querySelector('.warning_par').innerHTML = 'Please fill all fields with only numeric characters';
        } else {
            document.getElementById('result').innerHTML = totalPrintCost;
        }
    });
};