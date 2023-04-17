"use strict";

console.log("gggo");

const fahrenheit = document.querySelector(".fahrenheit");
const celsius = document.querySelector(".celsius");
// const calculator = document.querySelector(".calculator");
const restart = document.querySelector(".restart");

const convertTemperature = (type, degree) => {
  let shortValue;
  if (type.toLowerCase() === "f") {
    shortValue = ((degree - 32) * (5 / 9)).toFixed(1);
  } else if (type.toLowerCase() === "c") {
    shortValue = (degree * 1.8 + 32).toFixed(1);
  }
  return parseFloat(shortValue);
};

celsius.addEventListener("input", () => {
  fahrenheit.value = convertTemperature("c", celsius.value);
});

fahrenheit.addEventListener("input", () => {
  celsius.value = convertTemperature("f", fahrenheit.value);
});

restart.addEventListener("click", () => {
  fahrenheit.value = "";
  celsius.value = "";
});

// calculator.addEventListener("input", () => {
//   if (fahrenheit.value !== "") {
//     let celsiusTemp = (parseFloat(fahrenheit.value) - 32) * (5 / 9);
//     celsius.value = parseFloat(celsiusTemp.toFixed(1));
//   } else {
//     let fahrTemp = parseFloat(celsius.value) * 1.8 + 32;
//     fahrenheit.value = parseFloat(fahrTemp.toFixed(1));
//   }
// });
