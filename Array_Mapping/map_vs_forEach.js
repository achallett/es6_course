var numbers = [ 1, 2, 3];
var doubledNumbers = [];

numbers.forEach(function(number){
    doubledNumbers.push(number * 2);
});

console.log(doubledNumbers);

var doubledNumbers = numbers.map(function(number){
    return number * 2;
})

console.log(doubledNumbers);