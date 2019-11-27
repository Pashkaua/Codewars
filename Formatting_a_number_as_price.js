// Your objective is to add formatting to a plain number to display it as price.

// The function should return a string like this:

// var price = numberToPrice(13253.5123);
// console.log(price); // 13,253.51
// Numbers should use the standard comma for every 3 numbers and dot to separate the cents, cents need to be truncated to 2 decimals, in the case that the decimal part of the number is 1 character long or none you should add 0's so that the result will always have 2 decimal characters, the function will also evaluate negative numbers.

// function should return a string 'NaN' if the input is not a valid number

//-------- My solutions

var numberToPrice = function(number) {
  if (!number || isNaN(number)) {
    return "NaN";
  } else {
    return (number - 0.0045).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  }
};

console.log(numberToPrice(1, 500.12));
console.log(numberToPrice(1500.129));
console.log(numberToPrice(-5));
console.log(numberToPrice(1000000.5));
console.log(numberToPrice("@"));
