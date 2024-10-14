const convertToCelsius = function(temp) {
  let c = ((temp-32)*5/9)
  c = Math.round(10*c, 2)/10
  return c
};

const convertToFahrenheit = function(temp) {
  let c = (temp*9/5)+32
  c = Math.round(10*c, 2)/10
  return c
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
