//Pseduo code
//Define the parameters
//What are the results?
//Examples
//1) multiplies two numbers when one is stringified
//2) treats null values as zeroes and includes them in the calculation
//3) ignores undefined and empty string values and continues operation
//4) ignores non-numeric values  and continues operation
//5) returns NaN if the array does not represent a proper operation


//* eslint-disable comma-spacing */
/* eslint-disable no-sparse-arrays */
/* eslint-disable no-console */
/* eslint-disable eqeqeq */

const array = [0, null, 1, '', 2, undefined, 2, , , , , 4, , 4, , 5, , 6, , , ,]
const arrFiltered = []

// multiplies two numbers when one is stringified
function calculate (CalculationStepsArray){
   //get filtered numbers and operation
   filterNumbersAndOperation(CalculationStepsArray);
   //what is the operation  [2,'*',4]
    switch(arrFiltered[1]){
      case '*':
        return arrFiltered[0]*arrFiltered[2];
        break;
        case '-':
          return arrFiltered[0]-arrFiltered[2];
          break;
        case '+':
            return arrFiltered[0]+arrFiltered[2];
            break;
          case '/':
              return arrFiltered[0]/arrFiltered[2];
              break;
      default:
        return NaN;
        break;  
    }

}
function filterNumbersAndOperation(calculationStepsArray) {
  //convert a string to a number 
  index=0
  calculationStepsArray.forEach(element => {
    if(!isNaN(element)){
      arrFiltered[index]=element;
      index+=1;
    }else{
      if(!isNaN(parseInt(element))){
        arrFiltered[index]=parseInt(element);
        index+=1;
      }else{
        if(element=='*'||element=='\\'||element=='+'||element=='-'){
          arrFiltered[index]=element;
          index+=1;
        }
      }
    } 
  });
    
}

    
    
  
            
//multiplies two numbers when one is stringified          
// Convert Null values as zeros// Undefined values ignored
// Empty string values ignored
// Non-numeric values ingored
// Return NaN if proper operation is not represent


module.exports = calculate

