exports.min = function min(array) {
  if (!array || array.length === 0) return 0;
  return array.sort((a, b) => a - b).splice(0, 1);
};

exports.max = function max(array) {
  if (!array || array.length === 0) return 0;
  return array.sort((a, b) => b - a).splice(0, 1);
};

exports.avg = function avg(array) {
  if (!array || array.length === 0) return 0;
  return array.reduce((a, b) => a + b, 0) / array.length;
};