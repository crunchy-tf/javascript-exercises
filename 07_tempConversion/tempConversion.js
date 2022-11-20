const convertToCelsius = function(x) {
  x=(x-32)*(5/9)
  x_rounded = Math.round(x*10)/10
  return x_rounded
};

const convertToFahrenheit = function(x) {
  x= (x*(9/5)+32)
  x_rounded = Math.round(x*10)/10
  return x_rounded
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
