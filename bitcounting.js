var countBits = function (n) {
  const binary = n.toString(2);
  return binary.replace(/[0]/gi, '').length;
};

console.log(countBits(1234))