var computers = [
    {name: 'apple', ram:16},
    {name: 'acer', ram:32},
    {name: 'hp', ram:24}
];

//Does every computer have more than x ram
var doesEveryComputer = computers.every(function(computer){
    return computer.ram > 16
})
console.log("doesEveryComputer:",doesEveryComputer);

//Does some computer have more than x ram
var doesSomeComputer = computers.some(function(computer){
    return computer.ram > 16;
});
console.log("doesSomeComputer:", doesSomeComputer);