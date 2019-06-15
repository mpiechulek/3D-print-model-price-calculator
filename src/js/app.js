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

    const warning = () => {
        let sta_1 = document.querySelector('.warning_par').innerHTML = 'Please fill all fields with only numeric characters';
        return sta_1;
    };

    const getData = () => {
        rollPrice = document.getElementById('fill-roll-price').value.replace(",", ".");
        fillWeight = document.getElementById('fill-weight').value.replace(",", ".");
        _3DWeight = document.getElementById('print-weight').value.replace(",", ".");
        powerCons = document.getElementById('pow-consum').value.replace(",", ".");
        priceKWh = document.getElementById('price-kwh').value.replace(",", ".");
        time_h = document.getElementById('time-h').value.replace(",", ".");
        time_m = document.getElementById('time-m').value.replace(",", ".");
    };

    const calculate = () => {

        getData();

        let weightRatio = _3DWeight / fillWeight;
        let totalFillPrice = rollPrice * weightRatio;

        //Print time
        let time_minute = (time_m / 60);
        let totlalPrintTime = time_minute + time_h;

        //Power consumption
        let powerPercentage = (powerCons / 1000);
        let powerPrice_1h = priceKWh * powerPercentage;
        let totalPowerCost = powerPrice_1h * totlalPrintTime;

        // total print cost
        totalPrintCost = Math.round((totalFillPrice + totalPowerCost) * 100) / 100;
        console.log(`totalPrintCost= ${totalPrintCost}`);
        return totalPrintCost;
    };

    let submit = () => {
        let el = document.getElementsByClassName('form_inputs_input');

        for (let i = 0; i < el.length; i++) {
            if (el[i].value === '') {
                console.log('Warning!');
                warning();
            } else {
                console.log('Calculation');
                calculate();
            }
        }

        if (!isNaN(totalPrintCost)) {
            document.getElementById('result').innerHTML = totalPrintCost;
        } else {
            warning();
        }
    };

    // ========================================================================

    // Submit calculation
    document.addEventListener('keypress', (event) => {
        if (event.keyCode === 13) {
            submit();
        }
    });

    document.querySelector('.btn_submit').addEventListener('click', () => {
        submit();
    });

    // Reset form
    document.querySelector('.btn_reset').addEventListener('click', () => {
        document.getElementById('result').innerHTML = '000';
        document.querySelector('.warning_par').innerHTML = '';
        totalPrintCost = '000';
    });
})();