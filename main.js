String.prototype.toJadenCase = function () {
  return this.split(' ').map(function (item) {
    return item.replace(item.charAt(0), item.charAt(0).toUpperCase());
  }).join(' ');
};


var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase())
