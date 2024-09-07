function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

const convertToCelsius = function(fahren) {
    fahren = (fahren - 32) * 5/9;
    return round(fahren,1);
};

const convertToFahrenheit = function(celsius) {
  celsius = (celsius * 9/5 + 32);
  return round(celsius,1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
