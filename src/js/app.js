//jshint esversion:6
export const action = (() => {

    let totalPrintCost,
        rollPrice,
        fillWeight,
        _3DWeight,
        powerCons,
        priceKWh,
        time_h,
        time_m;

    // =========================================================================

    const warning = () => {
        let sta_1 = document.querySelector('.warning_par').innerHTML = 'Please fill all fields with only numeric characters';
        return sta_1;
    };

    const getData = () => {

        rollPrice = Math.abs(document.getElementById('fill-roll-price').value.replace(",", "."));
        fillWeight = Math.abs(document.getElementById('fill-weight').value.replace(",", "."));
        _3DWeight = Math.abs(document.getElementById('print-weight').value.replace(",", "."));
        powerCons = Math.abs(document.getElementById('pow-consum').value.replace(",", "."));
        priceKWh = Math.abs(document.getElementById('price-kwh').value.replace(",", "."));
        time_h = Math.abs(document.getElementById('time-h').value.replace(",", "."));
        time_m = Math.abs(document.getElementById('time-m').value.replace(",", "."));
    };

    const calculate = () => {

        if (rollPrice === '' || fillWeight === '' || _3DWeight === '' ||
            powerCons === '' || priceKWh === '' || time_h === '' || time_m === '') {

            console.log('Warning!');
            return warning();

        } else {
            let weightRatio;
            if (_3DWeight === 0 | fillWeight === 0) {
                weightRatio = 0;
            } else {
                weightRatio = _3DWeight / fillWeight;
            }

            let totalFillPrice = rollPrice * weightRatio;
            let time_minute;

            //Print time
            if (time_m === 0) {
                time_minute = 0;
            } else {
                time_minute = (time_m / 60);
            }

            let totlalPrintTime = time_minute + time_h;
            let powerPercentage;

            //Power consumption
            if (powerCons === 0) {
                powerPercentage = 0;
            } else {
                powerPercentage = (powerCons / 1000);
            }

            let powerPrice_1h = priceKWh * powerPercentage;
            let totalPowerCost = powerPrice_1h * totlalPrintTime;

            // total print cost
            totalPrintCost = Math.round((totalFillPrice + totalPowerCost) * 100) / 100;

            if (!isNaN(totalPrintCost)) {
                document.getElementById('result').innerHTML = totalPrintCost;
                return totalPrintCost;
            } else {
                warning();
                console.log(`totalPrintCost = ${totalPrintCost}`);
            }
        }
    };

    // ========================================================================

    // Submit calculation
    document.addEventListener('keypress', (event) => {
        if (event.keyCode === 13) {
            document.querySelector('.warning_par').innerHTML = '';
            getData();
            calculate();
        }
    });

    document.querySelector('.btn_submit').addEventListener('click', () => {
        document.querySelector('.warning_par').innerHTML = '';
        getData();
        calculate();
    });

    // Reset form
    document.querySelector('.btn_reset').addEventListener('click', () => {
        document.getElementById('result').innerHTML = '000';
        document.querySelector('.warning_par').innerHTML = '';
        totalPrintCost = '000';
    });

})();