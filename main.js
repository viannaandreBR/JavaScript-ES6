const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr = arr.map(function(item, index){
    return item + index;
});

alert(newArr);
console.log(newArr);