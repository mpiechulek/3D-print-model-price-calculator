//jshint esversion:6
import { variables } from "./data.js";

// //Fillament price
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
export let totalPrintCost = Math.round((totalFillPrice + totalPowerCost) * 100) / 100;