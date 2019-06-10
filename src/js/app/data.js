//jshint esversion:6

export const variables = {

    rollPrice: document.getElementById('fill-roll-price').value.replace(",", "."),
    fillWeight: document.getElementById('fill-weight').value.replace(",", "."),
    _3DWeight: document.getElementById('print-weight').value.replace(",", "."),
    powerCons: document.getElementById('pow-consum').value.replace(",", "."),
    priceKWh: document.getElementById('price-kwh').value.replace(",", "."),
    time_h: document.getElementById('time-h').value.replace(",", "."),
    time_m: document.getElementById('time-m').value.replace(",", ".")
};