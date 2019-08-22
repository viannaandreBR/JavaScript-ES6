"use strict";

var arr = [1, 4, 3, 4, 5, 6, 7, 8, 9, 10]; //const arr = [1,3,4,5,8,9];

var newArr = arr.map(function (item, index) {
  return item + index;
}); // soma elementos Array com reduce

alert(newArr);
console.log(newArr);
var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum); // Identifica Pares com filter

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log('Elementos pares', filter); // Identifica Impares com filter

var nfilter = arr.filter(function (item) {
  return item % 2 === 1;
});
console.log('Elementos impares', nfilter); // Tamanho do Array
// Funcionalidade Find

var find = arr.find(function (index) {
  return index === 4;
});
console.log('Localizando o 4', find);
