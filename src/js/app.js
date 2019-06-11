//jshint esversion:6
export const action = (() => {

    let totalPrintCost;

    // Submit calculation
    document.querySelector('.btn_submit').addEventListener('click', () => {

        //variables from inputs form

        const variables = {
            rollPrice: document.getElementById('fill-roll-price').value.replace(",", "."),
            fillWeight: document.getElementById('fill-weight').value.replace(",", "."),
            _3DWeight: document.getElementById('print-weight').value.replace(",", "."),
            powerCons: document.getElementById('pow-consum').value.replace(",", "."),
            priceKWh: document.getElementById('price-kwh').value.replace(",", "."),
            time_h: document.getElementById('time-h').value.replace(",", "."),
            time_m: document.getElementById('time-m').value.replace(",", ".")
        };

        //Fillament price
        let weightRatio = variables._3DWeight / variables.fillWeight;
        let totalFillPrice = variables.rollPrice * weightRatio;

        //Print time
        let time_minute = (variables.time_m / 60);
        let totlalPrintTime = time_minute + variables.time_h;

        //Power consumption
        let powerPercentage = (variables.powerCons / 1000);
        let powerPrice_1h = variables.priceKWh * powerPercentage;
        let totalPowerCost = powerPrice_1h * totlalPrintTime;

        // total print cost
        totalPrintCost = Math.round((totalFillPrice + totalPowerCost) * 100) / 100;

        if (!isNaN(totalPrintCost)) {
            document.getElementById('result').innerHTML = totalPrintCost;
        } else {
            document.querySelector('.warning_par').innerHTML = 'Please fill all fields with only numeric characters';
        }
    });

    // Reset form
    document.querySelector('.btn_reset').addEventListener('click', () => {
        document.getElementById('result').innerHTML = '000';
        document.querySelector('.warning_par').innerHTML = '';
        let totalPrintCoste = 0;
    });
})();