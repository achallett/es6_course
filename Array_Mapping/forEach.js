var colours = ['red', 'green', 'blue'];

colours.forEach(function(element){
    console.log(element);
});


//create array of numbers
var numbers = [1,2,3,4,5];
//Create variable to hold the sum
var sum = 0; 
//Loop over the array, incrememnting the sum valyes
numbers.forEach(function(number){
    sum += number;
});
console.log(sum);


numbers.forEach(function(number){
    sum += number;
});
function adder(number){
    sum += number;
}
numbers.forEach(adder);
console.log(sum);

