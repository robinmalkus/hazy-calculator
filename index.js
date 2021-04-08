//Pseduo code
//Define the parameters
//What are the results?
//Examples
//1) multiplies two numbers when one is stringified
//2) treats null values as zeroes and includes them in the calculation
//3) ignores undefined and empty string values and continues operation
//4) ignores non-numeric values  and continues operation
//5) returns NaN if the array does not represent a proper operation

//function calculate (CalculationSteps)
//* eslint-disable comma-spacing */
/* eslint-disable no-sparse-arrays */
/* eslint-disable no-console */
/* eslint-disable eqeqeq */
const array = [0, null, 1, '', 2, undefined, 2, , , , , 4, , 4, , 5, , 6, , , ,]
const arrFiltered = array.filter(element => {
  return element != null && element != ''
})
console.log(arrFiltered)

//function CalculationSteps(HazyCalculator) {}
//const CalculationSteps = (Operands) => { };
//const CalculationSteps = (undefined) => { };
            //const CalculationSteps = (nonNumeric) => { };
            
            
            // Convert Null values as zeros
            // Undefined values ignored
            // Empty string values ignored
            // Non-numeric values ingored
            // Return NaN if proper operation is not represent
module.exports = array