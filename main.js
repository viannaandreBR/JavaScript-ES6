const arr = [1, 4, 3, 4, 5, 6, 7, 8, 9, 10];

//const arr = [1,3,4,5,8,9];

const newArr = arr.map(function(item, index){
    return item + index;
});

// soma elementos Array com reduce

alert(newArr);
console.log(newArr);

const sum = arr.reduce(function(total,next){
    return total + next;
})

console.log(sum);

// Identifica Pares com filter
const filter = arr.filter(function(item)
{
    return item % 2 === 0;
});
console.log('Elementos pares',filter);

// Identifica Impares com filter
const nfilter = arr.filter(function(item)
{
    return item %2 === 1;
});

console.log('Elementos impares',nfilter);

// Tamanho do Array

// Funcionalidade Find

const find = arr.find(function(index)
{
    return index === 4;
})
console.log('Localizando o 4',find);