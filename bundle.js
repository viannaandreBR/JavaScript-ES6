"use strict";

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //const arr = [1,3,4,5,8,9];

var newArr = arr.map(function (item, index) {
  return item + index;
});
alert(newArr);
console.log(newArr);
var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
