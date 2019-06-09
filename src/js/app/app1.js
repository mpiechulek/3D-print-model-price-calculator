//jshint esversion:6


let array = [];




let fillPrice = document.getElementById('fill-price').value;
let fillWeight = document.getElementById('fill-weight').value;
let _3DWeight = document.getElementById('print-weight').value;
let powerCons = document.getElementById('pow-consum').value;
let priceKWh = document.getElementById('price-kwh').value;
let time_h = document.getElementById('time-h').value;
let time_m = document.getElementById('time-m').value;


const getData = () => {

    fillPrice = fillPrice.replace(",", ".");
    fillWeight = fillWeight.replace(",", ".");
    _3DWeight = _3DWeight.replace(",", ".");
    powerCons = powerCons.replace(",", ".");
    time_h = time_h.replace(",", ".");
    time_m = time_m.replace(",", ".");


};