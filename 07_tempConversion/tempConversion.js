const convertToCelsius = function(temp) {
  let nT=5/9*(temp-32);
  return Math.round(nT*10)/10;
};

const convertToFahrenheit = function(temp) {
  let nT=9/5*temp + 32;
  return Math.round(nT*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
