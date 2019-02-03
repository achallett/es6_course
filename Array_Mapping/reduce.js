var numbers = [10,20,30];
var sum = 0;
var sum2;

for (var i = 0; i<numbers.length; i++){
    sum += numbers[i];
}

var sum2 = numbers.reduce(function(total, element){
    return total+=element;
},0);

console.log(sum);
console.log(sum2);
