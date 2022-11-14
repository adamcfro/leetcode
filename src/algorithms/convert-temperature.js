/**
 * Given a non-negative integer rounded to two decimal places that denotes the 
 * temperature in Celsius, converts Celsius into Kelvin and Fahrenheit and 
 * returns the temperatures in an array in the form [Kelvin, Fahrenheit].
 * 
 * @param {number} celsius - An integer parameter
 * @returns {number[]} - Returns Kelvin and Fahrenheit conversions in an array
 */
function convertTemperature (celsius) {
  const fahr = celsius * 1.8 + 32;
  const kelvin = celsius + 273.15
  return [kelvin, fahr];
}