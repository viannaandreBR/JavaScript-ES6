const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const arr = [1,3,4,5,8,9];

const newArr = arr.map(function(item, index){
    return item + index;
});

alert(newArr);
console.log(newArr);

const sum = arr.reduce(function(total,next){
    return total + next;
})

console.log(sum);